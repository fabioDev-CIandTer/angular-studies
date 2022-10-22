import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';





@NgModule({
  declarations: [],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressBarModule
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressBarModule
  ]
})
export class AngularMaterialModule { }
