import { AllPokemonPropertiesModel } from './../model/pokemon-model';
import { createAction, props } from '@ngrx/store';
import { PokemonPayload } from '../model/pokemon-model';

export const pokemonAction = createAction(
  '[Pokemon] Pokemon Pokemons'
);

export const pokemonActionSuccess = createAction(
  '[Pokemon] Pokemon Action Success',
  props<{ data: PokemonPayload }>()
);

export const pokemonActionGetDetails= createAction(
  '[Pokemon] Pokemon Action Get Details',
  props<{ urlObject: {url:string, name:string}[]  }>()
);

export const addPokemonAction= createAction(
  '[Pokemon] Add Pokemon Action',
  props<{ pokemonData:AllPokemonPropertiesModel }>()
);

export const addPokemonsDetails= createAction(
  '[Pokemon] Add Pokemon To List Action',
  props<{ pokemonData:AllPokemonPropertiesModel[] }>()
);

export const pokemonActionFailure = createAction(
  '[Pokemon] Pokemon Pokemons Failure',
  props<{ error: any }>()
);
