import { select, Store } from '@ngrx/store';
import { NavigationEnd, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { filter, map} from 'rxjs/operators'
import { PokemonService } from './pokemon.service';
import { AllPokemonPropertiesModel } from './model/pokemon-model';
import { AppState } from '../reducers';
import { getPokemonDetailsList } from './store/pokemon.selectors';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'] 
})
export class PokemonComponent implements OnInit {

  @Input() pokemonsList:any[]=[]
  @Input() isRouteDetailActive:boolean=false;

  private pokemonsListTT:AllPokemonPropertiesModel[]=[];

  constructor(private service:PokemonService, private router:Router, private store:Store<AppState>) {
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

  this.store.pipe(select(getPokemonDetailsList)).subscribe({
    next:(v)=> {
      this.pokemonsList=v
    }
  })

}

  buscaPokemonByName(event:string){
    console.log(event)
  }

}
