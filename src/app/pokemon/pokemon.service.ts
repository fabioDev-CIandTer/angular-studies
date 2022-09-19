import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url:string="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100";

  constructor(
    private httpClient: HttpClient
  ) { }

  get apiListAllPokemons():Observable<any>{
    return this.httpClient.get(this.url)
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
}
