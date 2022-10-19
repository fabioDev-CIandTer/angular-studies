import { AllPokemonPropertiesModel } from './../model/pokemon-model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { PokemonPayload } from '../model/pokemon-model';


export interface PokemonsMetaDataState extends EntityState<PokemonPayload> {
    pokemonMetaPayload: PokemonPayload | null;
}

export const pokemonsMetaDataAdapter: EntityAdapter<PokemonPayload> = createEntityAdapter(
    {
        selectId: (id) => id.count,
    }
);

export const pokemonsMetaDataInitialState: PokemonsMetaDataState = pokemonsMetaDataAdapter.getInitialState(
    {
        pokemonMetaPayload:null
    }
);



export interface PokemonsListaState extends EntityState<AllPokemonPropertiesModel> {
    pokemonListaPayload: AllPokemonPropertiesModel[] | null;
}

export const pokemonsListaAdapter: EntityAdapter<AllPokemonPropertiesModel> = createEntityAdapter(
    {
        selectId: (pokemonLista) => pokemonLista.id,
    }
);

export const pokemonsListaInitialState: PokemonsListaState = pokemonsListaAdapter.getInitialState(
    {
        pokemonListaPayload:[]
    }
);