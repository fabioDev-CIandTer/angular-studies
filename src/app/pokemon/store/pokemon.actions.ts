import { UrlObjectModel, AllPokemonPropertiesModel, ApiFirstPayloadModel, PaginacaoPayloadModel } from './../model/pokemon-model';
import { createAction, props } from '@ngrx/store';


export const fetchNewDataActionReset = createAction(
  '[Pokemon] Action Reset',
)


export const getPokemonDataAction = createAction(
  '[Pokemon] Paginacao Action',
  props<{ paginacao?:number} >()
);

export const paginacaoActionLoad = createAction(
   '[Pokemon] Paginacao Action Load',
   props<{ paginacao:PaginacaoPayloadModel} >()
);

export const paginacaoActionLoaded = createAction(
  '[Pokemon] Paginacao Action Loaded',
);

export const paginacaoActionError = createAction(
  '[Pokemon] Paginacao Action Error',
  props<{ error:any} >()
);

export const urlActionLoad = createAction(
   '[Pokemon] Url Action Load',
   props<{ url:UrlObjectModel[]} >()
);

export const urlActionLoaded = createAction(
  '[Pokemon] Url Action Loaded',
);

export const urlActionError = createAction(
  '[Pokemon] Url Action Error',
  props<{ error:any} >()
);

export const listaActionLoad = createAction(
   '[Pokemon] Lista Action Load',
   props<{ lista:AllPokemonPropertiesModel[]} >()
);

export const listaActionLoaded = createAction(
  '[Pokemon] Lista Action Loaded',
);

export const listaActionError = createAction(
  '[Pokemon] Lista Action Error',
  props<{ error:any} >()
);









