import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-most-popular',
  templateUrl: './movie-most-popular.component.html',
  styleUrls: ['./movie-most-popular.component.scss']
})
export class MovieMostPopularComponent {
  movieList: any = ''
  sub: any = null

  constructor(private dataService: DataService) {

  }
  ngOnInit() {
    this.getMoviePopular()

  }

  getMoviePopular() {
    this.sub = this.dataService.getMoviesPopular().subscribe((data) =>
      this.movieList = data)


  }

  truncateDescription(description: string): string {
    return description.length > 50 ? description.substring(0, 150) + '...' : description;
  }
}
