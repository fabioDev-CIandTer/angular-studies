import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonModel } from './pokemon-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pokemon:PokemonModel={id:"",name:"", img:"", types:[]}
  
  public pokemonDetails:any;

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  goToDetailsPage(){
    this.router.navigate(['details', this.pokemon.id], { relativeTo: this.route });
  }

}
