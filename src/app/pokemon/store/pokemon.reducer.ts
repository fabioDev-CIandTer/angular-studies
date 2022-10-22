
import { createReducer, on } from '@ngrx/store';
import { PokemonsActions } from './pokemon-types';
import * as entity from './pokemon.entities';
import{EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity'
import { StoreCompleteModel } from '../model/pokemon-model';



export const pokemonFeatureKey = 'pokemon';

export interface PokemonState extends EntityState<StoreCompleteModel> {
  isAllDataFetched:boolean
  paginacao:entity.PaginacaoState,
  url:entity.UrlsState,
  lista:entity.ListaState,
}

export const pokemonStateAdapter: EntityAdapter<StoreCompleteModel> = createEntityAdapter({
  selectId: (id) => id.id
})

export const pokemonInitialState: PokemonState = pokemonStateAdapter.getInitialState({
  isAllDataFetched:false,
  paginacao:entity.paginacaoInitialState,
  url:entity.urlsInitialState,
  lista:entity.listaInitialState
});


export const reducer = createReducer(
  
  pokemonInitialState, 
  on(PokemonsActions.paginacaoActionLoad, (state, action)=>{
    return {...state, 
            paginacao: entity.paginacaoStateAdapter.addOne(action.paginacao, {...state.paginacao, isPaginacaoFetched:true})
          }
  }),

  on(PokemonsActions.urlActionLoad, (state, action)=>{
    return {...state, 
            url: entity.urlsStateAdapter.addMany(action.url, {...state.url, isUrlFetched:true})
          }
  }),

  on(PokemonsActions.listaActionLoad, (state, action)=>{
    return {...state, 
            lista: entity.listaStateAdapter.addMany(action.lista, {...state.lista, isListaFetched:true})
          }
  }),

  on(PokemonsActions.fetchNewDataActionReset, (state, action) =>({
      ...state,
      lista:{...state.lista, isListaFetched:false},
      paginacao:{...state.paginacao, isPaginacaoFetched:false},
      url:{...state.url, isUrlFetched:false}
  }))


)


export const listaSelectors = entity.listaStateAdapter.getSelectors();
export const pokemonSelectors= pokemonStateAdapter.getSelectors();


