import { NavigationEnd, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import {filter, map} from 'rxjs/operators'
import { PokemonService } from './pokemon.service';
import { RawPokemonModel } from './card/pokemon-model';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'] 
})
export class PokemonComponent implements OnInit {

  @Input() pokemonsList:Array<RawPokemonModel>=[];
  @Input() isRouteDetailActive:boolean=false;

  constructor(private service:PokemonService, private router:Router) {
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(e => {
        return e.url.replace(/[0-9]/g, "").split("/").join("") == "pokemondetails"
      })
    ).subscribe({
        next:(v:boolean)=> {
          console.log(v)
          this.isRouteDetailActive=v
        }
    })
  }

  ngOnInit(): void {
    
    this.service.apiListAllPokemons.subscribe({
      next: (v) => {
        console.log(v)
        this.pokemonsList = v.results
      },
      error: (e) => console.error(e),
      complete: () => console.info(this.pokemonsList) 
    });
  }

  buscaPokemonByName(event:string){
    console.log(event)
    this.service.apiListAllPokemons.subscribe({
      next: (v) =>{
        this.pokemonsList = v.results.filter((pokemonObject:any)=>{ return (pokemonObject.name as string).includes(event)})
      },
      error:(e)=>{
        console.log(e)
      },
      
    })
  }

}
