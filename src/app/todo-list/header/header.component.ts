import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<div class="row-center-flex header-title commom-padding max-width">
              <h1>{{titulo}}</h1>
            </div>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Input() titulo:string = "";

}


