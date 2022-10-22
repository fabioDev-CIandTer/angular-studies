import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/reducers";
import { selectPaginacao } from "./pokemon.selectors";
import { filter, finalize, first, tap } from "rxjs";
import { PokemonsActions } from "./pokemon-types";


@Injectable()
export class PokemonStoreService{

    constructor(private store:Store<AppState>) {}


    fetchData(page?:number){
        return this.store.pipe(
            select(selectPaginacao),
            tap((paginacao)=>{
                if(!paginacao.isPaginacaoFetched){
                    this.store.dispatch(PokemonsActions.paginacaoAction())
                }
            }),
            filter(paginacao=> !!paginacao.isPaginacaoFetched),
            first(),
            finalize(()=> {
                
                this.store.pipe(select(getUrlsPokemonDetails)).subscribe({
                    next:(v)=>{
                        this.store.dispatch(PokemonsActions.pokemonActionGetDetails({urlObject:v}))
                        // this.store.dispatch(PokemonsActions.pokemonActionDone())
                    }
                })
            })
        )
    }


    
}