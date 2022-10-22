import { PaginacaoState, UrlsState, ListaState } from './pokemon.entities';
import { pokemonFeatureKey, PokemonState } from './pokemon.reducer';
import { createFeatureSelector, createSelector, props } from '@ngrx/store';


export const selectorPokemonState = createFeatureSelector<PokemonState>(pokemonFeatureKey);
export const selectorPaginacaoState = createFeatureSelector<PaginacaoState>(pokemonFeatureKey);
export const selectorUrlState = createFeatureSelector<UrlsState>(pokemonFeatureKey);
export const selectorListaState = createFeatureSelector<ListaState>(pokemonFeatureKey);

export const selectPaginacao = createSelector(
    selectorPaginacaoState,
    paginacao => paginacao
)

export const selectUrl = createSelector(
    selectorUrlState,
    url => url
)

export const selectLista = createSelector(
    selectorPokemonState,
    pokemon=> pokemon.lista
)

export const selectIsDataResetedForMoreLoad = createSelector(
    selectorPokemonState,
    (pokemon)=>{ 
        return [pokemon.lista.isListaFetched, pokemon.url.isUrlFetched, pokemon.paginacao.isPaginacaoFetched]
    }
)

export const selectByName = (props: {name:string}) => createSelector(
    selectorPokemonState,
    (pokemon)=> Object.values(pokemon.lista.entities).filter(pokemon=> pokemon?.name.includes(props.name))
)


