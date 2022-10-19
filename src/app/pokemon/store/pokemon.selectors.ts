import { AllPokemonPropertiesModel } from './../model/pokemon-model';
import { pokemonFeatureKey, PokemonState, selectAll } from './pokemon.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonsListaState } from './pokemon.entities';

export const selectorPokemonsState = createFeatureSelector<PokemonState>(pokemonFeatureKey);
export const selectorPokemonsListaState = createFeatureSelector<PokemonsListaState>(pokemonFeatureKey);

export const selectFirstFetch = createSelector(
    selectorPokemonsState,
    (pokemons)=>pokemons.data.meta
)

export const getUrlsPokemonDetails = createSelector(
    selectFirstFetch,
    (pokemons)=>{
        const id = pokemons.pokemonMetaPayload.ids[0]
        return pokemons.pokemonMetaPayload.entities[id]?.results as {name:string, url:string}[]
    }
)

export const getPokemonDetailsList = createSelector(
    selectorPokemonsState,
    (list)=> Object.values(list.data.lista.pokemonListaPayload.entities)
)
