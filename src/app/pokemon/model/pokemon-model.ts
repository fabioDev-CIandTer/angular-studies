export interface PokemonCardModel {
    id:string,
    name:string,
    img:string,
    types:Array<{slot:number, type:{name:string, url:string}}>,
}

export interface AllPokemonPropertiesModel{
    abilities:any,
    base_experience:any,
    forms:any,
    game_indices:any,
    height:any,
    held_items:any,
    id:any,
    is_default:any,
    location_area_encounters:any,
    moves:any,
    name:any,
    order:any,
    past_types:any,
    species:any,
    sprites:any,
    stats:any,
    types:any,
    weight:any,
    url:any,
}

export interface PokemonPayload{
    count: number,
    next?: string,
    previous?: string,
    results: {name:string, url:string}[],
    pokemonsDetails?:AllPokemonPropertiesModel[]
}