import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ]
})
export class AngularMaterialModule { }
