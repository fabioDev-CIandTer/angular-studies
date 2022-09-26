import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  isLoading:boolean=false;

  constructor(private service:PokemonService,
              private activatedRoute:ActivatedRoute) { 
                
              }

  ngOnInit(): void {
    this.showDetails();
  }

  public pokemonDetails:any;

  showDetails(){
    const id:string = this.activatedRoute.snapshot.params['id']
    const detail = this.service.getDetail(id);
    const detailSpecies = this.service.getDetailSpecies(id);

    return forkJoin({ detail:detail,detailSpecies:detailSpecies }).subscribe(
      {
        next: (res)=>{
          this.pokemonDetails = res
          this.isLoading=true;
          console.log(this.pokemonDetails)
        },
        error:(err)=>{

        }
      }
    )
  }

}
