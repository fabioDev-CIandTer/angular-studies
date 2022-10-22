
import { createReducer, on } from '@ngrx/store';
import { PokemonsActions } from './pokemon-types';
import * as entity from './pokemon.entities';



export const pokemonFeatureKey = 'pokemon';

export interface PokemonState {
  paginacaoPayload:entity.PaginacaoState,
  urlsPayload:{
    loaded:boolean,
    payload:entity.UrlsState,
  },
  listaPayload:entity.ListaState
}

export const initialPokemonState:PokemonState = {
  paginacaoPayload:entity.paginacaoInitialState,
  urlsPayload:{
    loaded:false,
    payload:entity.urlsInitialState,
  },
  listaPayload:entity.listaInitialState
}


export const reducer = createReducer(
  initialPokemonState, 
  on(PokemonsActions.paginacaoActionLoaded, (state, {paginacao})=> ({
    ...state,
    paginacaoPayload:{
        ...state.paginacaoPayload,

        isPaginacaoFetched:true,
        paginacaoPayload:entity.paginacaoStateAdapter.addOne(paginacao, state.paginacaoPayload)
    }
  })),

  on(PokemonsActions.urlActionLoaded, (state,{url})=> ({
    ...state,
    urlsPayload:{
      ...state.urlsPayload,
      loaded:true,
      isUrlFetched:true,
      urlsPayload:entity.urlsStateAdapter.setAll(url, state.urlsPayload.payload), 
    }
  })),

  on(PokemonsActions.listaActionLoaded, (state,action)=> ({
    ...state,
    listaPayload:{
      ...state.listaPayload,
      isListaFetched:true,
      listaPayload:entity.listaStateAdapter.addMany(action.lista, state.listaPayload),
    }
  })),


  on(PokemonsActions.fetchNewDataActionReset, (state,action)=> ({
    ...state,
    listaPayload:{
      ...state.listaPayload,
      
      isListaFetched:false,
    }
  
  }))


)


export const listaSelectors = entity.listaStateAdapter.getSelectors();




// on(PokemonsActions.listaActionLoaded, (state,{lista})=> ({
//   ...state,
//   listaPayload:{
//     ...state.listaPayload,
//     isListaFetched:true,
//     listaPayload:entity.listaStateAdapter.addMany(lista, state.listaPayload)
//   }
// }))

