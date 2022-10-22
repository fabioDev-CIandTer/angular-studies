export interface PokemonCardModel {
    id:string,
    name:string,
    img:string,
    types:Array<{slot:number, type:UrlObjectModel}>,
}

export interface UrlObjectModel{
    name:string, 
    url:string
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

export interface PaginacaoPayloadModel{
    count: number,
    next?: string,
    previous?: string,
}

export interface ApiFirstPayloadModel extends PaginacaoPayloadModel{
    results:UrlObjectModel[]
}

export interface StoreCompleteModel {
    id:number,
    paginacao:PaginacaoPayloadModel,
    lista: AllPokemonPropertiesModel,
    urls:UrlObjectModel,
}