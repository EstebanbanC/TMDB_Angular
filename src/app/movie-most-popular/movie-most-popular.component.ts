import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-most-popular',
  templateUrl: './movie-most-popular.component.html',
  styleUrls: ['./movie-most-popular.component.scss']
})
export class MovieMostPopularComponent {

  MoviePopular!: Movie[]
  sub : any = null
  JSON: any;

  constructor(private dataService : DataService){

  }

  ngOnInit() {
    this.sub = this.dataService.getMoviesPopular().subscribe(
      (data: Movie[]) => this.MoviePopular = data
    )
    
  }
}
