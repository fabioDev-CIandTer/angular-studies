export interface PokemonModel {
    name:string,
    img:string,
    types:Array<{slot:number, type:{name:string, url:string}}>,
}

export interface RawPokemonModel{
    name:string,
    status:any
}