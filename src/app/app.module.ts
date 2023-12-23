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
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SoloMovieComponent } from './solo-movie/solo-movie.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { ActorsDisplayComponent } from './actors-display/actors-display.component';
import { StarComponent } from './star/star.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TVDetailsComponent } from './tv-details/tv-details.component';
import { MovieTop100Component } from './movie-top-100/movie-top-100.component';
import { MovieMostPopularComponent } from './movie-most-popular/movie-most-popular.component';
import { TVTop100Component } from './tv-top-100/tv-top-100.component';
import { TVPopularComponent } from './tv-popular/tv-popular.component';
import { ActorsComponent } from './actors/actors.component';
import { ShowDisplayComponent } from './show-display/show-display.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MoviesComponent,
    ShowsComponent,
    FooterComponent,
    ApiiComponent,
    StarComponent,
    MovieDetailsComponent,
    TVDetailsComponent,
    MovieTop100Component,
    MovieMostPopularComponent,
    TVTop100Component,
    TVPopularComponent,
    AboutComponent,
    HomeComponent,
    SoloMovieComponent,
    MovieDisplayComponent,
    ActorsDisplayComponent,
    ActorsComponent,
    ShowDisplayComponent,
    SearchComponent
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
