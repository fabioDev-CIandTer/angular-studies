import { selectPaginacao } from './pokemon.selectors';
import { select, Store } from '@ngrx/store';
import { tap, filter, first, finalize } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { AppState } from 'src/app/reducers';
import { PokemonsActions } from './pokemon-types';

@Injectable()
export class PokemonResolver implements Resolve<any>{

    private primeiroCarregamento=false;

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger
        return this.store.pipe(
            select(selectPaginacao),
            tap((paginacao)=>{
                if(!paginacao.isPaginacaoFetched && !this.primeiroCarregamento){
                    this.primeiroCarregamento=true;
                    this.store.dispatch(PokemonsActions.getPokemonDataAction({paginacao:0}))
                }
            }),
        )
    }

    constructor(private store:Store<AppState>){ }

}