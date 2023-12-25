import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-upcoming',
  templateUrl: './movie-upcoming.component.html',
  styleUrls: ['./movie-upcoming.component.scss']
})
export class MovieUpcomingComponent {
  movieList: any = ''
  sub: any = null

  constructor(private dataService: DataService) {

  }
  ngOnInit() {
    this.getMoviePopular()

  }

  getMoviePopular() {
    this.sub = this.dataService.getMovieUpComing().subscribe((data) =>
      this.movieList = data)


  }

  truncateDescription(description: string): string {
    return description.length > 50 ? description.substring(0, 150) + '...' : description;
  }
}
