import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ApiiComponent } from './apii/apii.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MoviesComponent,
    ShowsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ApiiComponent
  ],
   
imports: [
  BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule,
  HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
