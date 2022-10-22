import { select, Store } from '@ngrx/store';
import { NavigationEnd, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { filter, map} from 'rxjs/operators'
import { PokemonService } from './pokemon.service';
import { AllPokemonPropertiesModel } from './model/pokemon-model';
import { AppState } from '../reducers';
import { PageEvent } from '@angular/material/paginator';
import { selectUrl, selectLista, selectIsDataResetedForMoreLoad, selectByName } from './store/pokemon.selectors';
import { PokemonsActions } from './store/pokemon-types';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'] 
})
export class PokemonComponent implements OnInit {

  @Input() pokemonsList:AllPokemonPropertiesModel[]=[];
  @Input() isRouteDetailActive:boolean=false;

  loading=false;
  // paginatorOption$:PaginationOptionsModel | undefined;
  actualPageIndex=0;

  constructor(private service:PokemonService, private router:Router, private store:Store<AppState>) {
    debugger
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(e => {
        return e.url.replace(/[0-9]/g, "").split("/").join("") == "pokemondetails"
      })
    ).subscribe({
        next:(v:boolean)=> {
          console.log(v)
          this.isRouteDetailActive=v
        }
    })
  }

  

  ngOnInit(): void {
  this.loading=true;

  this.store.pipe(
    select(selectLista),
    filter(payload=> !!payload.isListaFetched)
  ).subscribe({
    next:(v)=>{
      this.loading=false
      this.pokemonsList=Object.values(v.entities) as AllPokemonPropertiesModel[];
      this.store.dispatch(PokemonsActions.fetchNewDataActionReset())
    }
  })
   
}

  buscaPokemonByName(event:string){
    
    this.store.pipe(select(selectByName({name: event}))).subscribe({
      next:(res)=> {
        this.pokemonsList=res as AllPokemonPropertiesModel[]
      }
    })
  }

  getPaginatorData(event:PageEvent){
    this.store.dispatch(PokemonsActions.getPokemonDataAction({paginacao:event.pageIndex*100}))
    //TODO fazer paginação
  }

}
