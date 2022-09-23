import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl:string="https://pokeapi.co/api/v2/pokemon";
  

  constructor(
    private httpClient: HttpClient
  ) { }

  get apiListAllPokemons():Observable<any>{
    return this.httpClient.get(this.baseUrl.concat('/?offset=0&limit=100'))
      .pipe(
        tap(res=>res),
        tap((res:any) =>{
          res.results.map((resPokemons:any)=>{
              this.getDetailsPokemon(resPokemons.url).subscribe( res=> resPokemons.status = res)
          });
        })
      )
  }

  getDetailsPokemon(url:string):Observable<any>{
    return this.httpClient.get(url).pipe( map( res=>res ) );
  }

  getDetail(id:string):Observable<any>{
    return this.getDetailsPokemon(this.baseUrl.concat('/').concat(id));
  }

  getDetailSpecies(id:string):Observable<any>{
    return this.getDetailsPokemon(this.baseUrl.concat('-species/').concat(id));
      
  }


}
