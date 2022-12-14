import { PokemonModule } from './pokemon/core/pokemon.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListModule } from './todo-list/core/todo-list.module';
import { HomeModule } from './home/core/home.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    
    HomeModule,
    TodoListModule,
    PokemonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
