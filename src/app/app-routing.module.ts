import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SoloMovieComponent } from './solo-movie/solo-movie.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorsDisplayComponent } from './actors-display/actors-display.component';
import { ShowDisplayComponent } from './show-display/show-display.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'solomovie', component: SoloMovieComponent },
  { path: 'movie/:id', component: MovieDisplayComponent },
  { path: 'actors' , component: ActorsComponent},
  { path: 'actor/:id', component: ActorsDisplayComponent },
  { path: 'show/:id', component: ShowDisplayComponent },
  { path: 'search/:query', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
