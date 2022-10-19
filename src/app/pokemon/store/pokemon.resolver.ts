import { getUrlsPokemonDetails, selectFirstFetch } from './pokemon.selectors';
import { select, Store } from '@ngrx/store';
import { tap, filter, first, finalize } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { AppState } from 'src/app/reducers';
import { PokemonsActions } from './pokemon-types';

@Injectable()
export class PokemonResolver implements Resolve<any>{

    private loading=false;

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
        return this.store.pipe(
            select(selectFirstFetch),
            tap((pokemonsFetched)=>{
                if(!pokemonsFetched.isMetaDataFetched && !this.loading){
                    this.loading=true;
                    this.store.dispatch(PokemonsActions.pokemonAction())
                }
            }),
            filter(pokemonsFetched=> !!pokemonsFetched.isMetaDataFetched),
            first(),
            finalize(()=> {
                this.loading=false
                this.store.pipe(select(getUrlsPokemonDetails)).subscribe({
                    next:(v)=>{
                        this.store.dispatch(PokemonsActions.pokemonActionGetDetails({urlObject:v}))
                    }
                })
            })
        )
    }

    constructor(private store:Store<AppState>){ }

}