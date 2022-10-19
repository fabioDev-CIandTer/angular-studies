import { AllPokemonPropertiesModel } from './../model/pokemon-model';
import { concatMap, finalize, first, map, tap } from 'rxjs';
import { PokemonService } from './../pokemon.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonsActions } from './pokemon-types';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getUrlsPokemonDetails, selectFirstFetch } from './pokemon.selectors';



@Injectable()
export class PokemonEffects {

  private listaPokemons:AllPokemonPropertiesModel[]=[]

  payloadPokemons = createEffect(
    ()=> 
     this.actions$.pipe(
      ofType(PokemonsActions.pokemonAction),
      concatMap(_action => this.pokemonService.apiListAllPokemons()),
      map(pokemons=> PokemonsActions.pokemonActionSuccess({data:pokemons}) )
      
    )
  )

  payloadPokemonsDetails = createEffect(
    ()=> 
     this.actions$.pipe(
      ofType(PokemonsActions.pokemonActionGetDetails),
      concatMap(_action => this.store.pipe(select(getUrlsPokemonDetails))),
      map(pokemonData => 
          pokemonData.map(urlObj=>{
            this.pokemonService.getDetailsPokemon(urlObj.url).subscribe({
              next:(v)=> this.listaPokemons.push(v),
              complete:()=>{
                if(this.listaPokemons.length==pokemonData.length){
                    this.store.dispatch(PokemonsActions.addPokemonsDetails({pokemonData:this.listaPokemons}))
                }
              }
            })
          })
      ),
    ), {dispatch:false}
  )



  constructor(private actions$: Actions,
    private store:Store<AppState>,
    private pokemonService:PokemonService) {}
}
