import { select, Store } from '@ngrx/store';
import { NavigationEnd, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { filter, map} from 'rxjs/operators'
import { PokemonService } from './pokemon.service';
import { AllPokemonPropertiesModel } from './model/pokemon-model';
import { AppState } from '../reducers';
import { PageEvent } from '@angular/material/paginator';
import { selectUrl, selectLista } from './store/pokemon.selectors';
import { PokemonsActions } from './store/pokemon-types';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'] 
})
export class PokemonComponent implements OnInit {

  @Input() pokemonsList:AllPokemonPropertiesModel[] | undefined;
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
  this.loading=false;

  

  this.store.pipe(
    select(selectLista),
    filter(payload=> !!payload.isListaFetched)
  ).subscribe({
    next:(v)=>{
     let x=v as unknown as Array<number>
     let z = Object.values( x )[3]
     let a=  z as unknown as {entities: any, ids: any, isListaFetched: boolean}
    this.pokemonsList= Object.values(a.entities)

    // if(this.actualPageIndex==0){
    //   this.store.dispatch(PokemonsActions.fetchNewDataActionReset())
    //   this.store.dispatch(PokemonsActions.getPokemonDataAction({paginacao:100}))
    // }
    // this.actualPageIndex++

    }
  })

   


  // this.store.pipe(
  //   select(getPokemonDetailsList),
  //   filter(payload=>payload.loaded),
  //   map(payload=>payload.list)
    
  //   ).subscribe({
  //   next:(res)=> {
  //       this.pokemonsList=res
  //       this.loading=false
  //   }
  // })
   
  
}

  buscaPokemonByName(event:string){
    
    // this.store.pipe(select(getPokemonDetailsList)).subscribe({
    //   next:(res)=> {
    //     if(res.loaded){
    //       this.pokemonsList=res.list.filter(pokemon=> pokemon?.name.includes(event))
    //     }
    //   }
    // })
  }

  getPaginatorData(event:PageEvent){
    console.log(event)
    // this.service.apiListAllPokemons(event.pageIndex*100).subscribe({
    //   next:(v)=>{
    //     this.store.dispatch(PokemonsActions.pokemonUrlsActionSuccess({urlObject:v.results}))
    //   }
    // })
  }

}
