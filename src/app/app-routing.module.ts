import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ActorsComponent } from './actors/actors.component';
import { SearchComponent } from './search/search.component';
import { TVTop100Component } from './tv-top-100/tv-top-100.component';
import { MovieTop100Component } from './movie-top-100/movie-top-100.component';
import { MovieMostPopularComponent } from './movie-most-popular/movie-most-popular.component';
import { MovieUpcomingComponent } from './movie-upcoming/movie-upcoming.component';
import { TvMostPopularComponent } from './tv-most-popular/tv-most-popular.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TVDetailsComponent } from './tv-details/tv-details.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';

const routes: Routes = [
  // Liens divers
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  // Liens pour les acteurs
  { path: 'actors' , component: ActorsComponent},
  { path: 'actor-details/:id', component: ActorDetailsComponent },
  
  { path: 'search/:query/:adult', component: SearchComponent },
  // { path: 'search', component: SearchComponent },

  // Liens pour les films
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  { path: 'movie-top-100', component: MovieTop100Component },
  { path: 'movie-most-popular', component: MovieMostPopularComponent },
  { path: 'movie-upcoming', component: MovieUpcomingComponent },

  // Liens pour les séries
  { path: 'tv-details/:id', component: TVDetailsComponent },
  { path: 'tv-most-popular', component: TvMostPopularComponent },
  { path: 'tv-top-100', component: TVTop100Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
