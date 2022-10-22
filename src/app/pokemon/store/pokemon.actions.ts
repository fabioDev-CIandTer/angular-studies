import { UrlObjectModel, AllPokemonPropertiesModel, ApiFirstPayloadModel, PaginacaoPayloadModel } from './../model/pokemon-model';
import { createAction, props } from '@ngrx/store';


export const fetchNewDataActionReset = createAction(
  '[Pokemon] Action Reset',
)


export const getPokemonDataAction = createAction(
  '[Pokemon] Paginacao Action',
  props<{ paginacao?:number} >()
);

export const paginacaoActionLoaded = createAction(
   '[Pokemon] Paginacao Action Loaded',
   props<{ paginacao:PaginacaoPayloadModel} >()
);

export const paginacaoActionError = createAction(
  '[Pokemon] Paginacao Action Error',
  props<{ error:any} >()
);

export const urlActionLoaded = createAction(
   '[Pokemon] Url Action Loaded',
   props<{ url:UrlObjectModel[]} >()
);

export const urlActionError = createAction(
  '[Pokemon] Url Action Error',
  props<{ error:any} >()
);

export const listaActionLoaded = createAction(
   '[Pokemon] Lista Action Loaded',
   props<{ lista:AllPokemonPropertiesModel[]} >()
);

export const listaActionError = createAction(
  '[Pokemon] Lista Action Error',
  props<{ error:any} >()
);









