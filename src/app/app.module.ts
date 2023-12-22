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
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TVDetailsComponent } from './tv-details/tv-details.component';
import { MovieTop100Component } from './movie-top-100/movie-top-100.component';
import { MovieMostPopularComponent } from './movie-most-popular/movie-most-popular.component';
import { TVTop100Component } from './tv-top-100/tv-top-100.component';
import { TVPopularComponent } from './tv-popular/tv-popular.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MoviesComponent,
    ShowsComponent,
    FooterComponent,
    ApiiComponent,
    MovieDetailsComponent,
    TVDetailsComponent,
    MovieTop100Component,
    MovieMostPopularComponent,
    TVTop100Component,
    TVPopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
