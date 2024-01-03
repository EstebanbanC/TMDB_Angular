import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-top-100',
  templateUrl: './movie-top-100.component.html',
  styleUrls: ['./movie-top-100.component.scss']
})
export class MovieTop100Component implements OnInit {
  movieList: any = ''
  sub: any = null

  constructor(private dataService: DataService) {

  }
  ngOnInit() {
    this.getMoviePopular()

  }

  getMoviePopular() {
    this.sub = this.dataService.getMovieTopRated().subscribe((data) =>
      this.movieList = data)


  }

  truncateDescription(description: string): string {
    return description.length > 50 ? description.substring(0, 150) + '...' : description;
  }
}
