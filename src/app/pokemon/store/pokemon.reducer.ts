import { createReducer, on } from '@ngrx/store';
import { PokemonsActions } from './pokemon-types';
import * as entity from './pokemon.entities';



export const pokemonFeatureKey = 'pokemon';

export interface PokemonState {
  data:{
    meta:{
      pokemonMetaPayload:entity.PokemonsMetaDataState,
      isMetaDataFetched:boolean
    },
    lista:{
      pokemonListaPayload:entity.PokemonsListaState,
      isListaDataFetched:boolean
    }
  }
}

export const initialPokemonState:PokemonState = {
  data:{
    meta:{
      pokemonMetaPayload:entity.pokemonsMetaDataInitialState,
      isMetaDataFetched:false
    },
    lista:{
      pokemonListaPayload:entity.pokemonsListaInitialState,
      isListaDataFetched:false
    }
  }  
}


export const reducer = createReducer(
  initialPokemonState, 
    on(PokemonsActions.pokemonActionSuccess, (state,{data} )=>({
      ...state,
      data:{
        ...state.data,
        meta:{
          ...state.data.meta,
          isMetaDataFetched:true,
          pokemonMetaPayload:entity.pokemonsMetaDataAdapter.addOne(data, state.data.meta.pokemonMetaPayload)
        }
      }
    })),
    on(PokemonsActions.addPokemonsDetails, (state, {pokemonData}) =>({
      ...state,
      data:{
        ...state.data,
        lista:{
          isListaDataFetched:true,
          pokemonListaPayload: entity.pokemonsListaAdapter.addMany(pokemonData, state.data.lista.pokemonListaPayload)
        }
      }
    }))
)

export const {selectAll}  = entity.pokemonsListaAdapter.getSelectors()


