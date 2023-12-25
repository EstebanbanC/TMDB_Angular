import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StarComponent } from './star/star.component';
import { TVDetailsComponent } from './tv-details/tv-details.component';
import { MovieTop100Component } from './movie-top-100/movie-top-100.component';
import { MovieMostPopularComponent } from './movie-most-popular/movie-most-popular.component';
import { TVTop100Component } from './tv-top-100/tv-top-100.component';
import { ActorsComponent } from './actors/actors.component';
import { SearchComponent } from './search/search.component';
import { TvFooterComponent } from './tv-footer/tv-footer.component';
import { MovieFooterComponent } from './movie-footer/movie-footer.component';
import { MovieUpcomingComponent } from './movie-upcoming/movie-upcoming.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvMostPopularComponent } from './tv-most-popular/tv-most-popular.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    StarComponent,
    TVDetailsComponent,
    MovieTop100Component,
    MovieMostPopularComponent,
    TVTop100Component,
    AboutComponent,
    HomeComponent,
    ActorsComponent,
    SearchComponent,
    TvFooterComponent,
    MovieFooterComponent,
    MovieUpcomingComponent,
    MovieDetailsComponent,
    TvMostPopularComponent,
    ActorDetailsComponent
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
