import { AllPokemonPropertiesModel, PaginacaoPayloadModel, UrlObjectModel} from './../model/pokemon-model';
import { createEntityAdapter, Dictionary, EntityAdapter, EntityState } from '@ngrx/entity';



export interface PaginacaoState extends EntityState<PaginacaoPayloadModel> {
    isPaginacaoFetched:boolean
}

export const paginacaoStateAdapter: EntityAdapter<PaginacaoPayloadModel> = createEntityAdapter({
    selectId: (id) => id.count
})

export const paginacaoInitialState: PaginacaoState = paginacaoStateAdapter.getInitialState({
    isPaginacaoFetched:false
});

/* ----------------------------------------------------------------------------------------------------- */

export interface UrlsState extends EntityState<UrlObjectModel> {
    isUrlFetched:boolean
}

export const urlsStateAdapter: EntityAdapter<UrlObjectModel> = createEntityAdapter({
    selectId: (id) => id.name,
});

export const urlsInitialState: UrlsState = urlsStateAdapter.getInitialState({
    isUrlFetched:false
});


/* ----------------------------------------------------------------------------------------------------- */


export interface ListaState extends EntityState<AllPokemonPropertiesModel> {
    isListaFetched:boolean,
}

export const listaStateAdapter: EntityAdapter<AllPokemonPropertiesModel> = createEntityAdapter({
    selectId: (pokemonLista) => pokemonLista.id
});

export const listaInitialState: ListaState = listaStateAdapter.getInitialState({
    isListaFetched:false
});

