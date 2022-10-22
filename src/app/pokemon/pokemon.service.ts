import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllPokemonPropertiesModel, ApiFirstPayloadModel } from './model/pokemon-model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl:string="https://pokeapi.co/api/v2/pokemon";  

  constructor(
    private httpClient: HttpClient
  ) { }

  apiListAllPokemons(pagination?:number):Observable<ApiFirstPayloadModel>{
    return this.httpClient.get<ApiFirstPayloadModel>(this.baseUrl.concat( `/?offset=${pagination ? pagination: 0}&limit=100` ));
  }

  getDetailsPokemon(url:string):Observable<AllPokemonPropertiesModel>{
    return this.httpClient.get<AllPokemonPropertiesModel>(url)
  }

  getDetail(id:string):Observable<any>{
    return this.getDetailsPokemon(this.baseUrl.concat('/').concat(id));
  }

  getDetailSpecies(id:string):Observable<any>{
    return this.getDetailsPokemon(this.baseUrl.concat('-species/').concat(id));
  }


}
