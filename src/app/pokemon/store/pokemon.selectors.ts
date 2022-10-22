import { PaginacaoState, UrlsState, ListaState } from './pokemon.entities';
import { listaSelectors, pokemonFeatureKey, PokemonState } from './pokemon.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


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
    lista=> lista.listaPayload
)


