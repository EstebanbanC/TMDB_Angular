import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  movie: any = null;
  actors :any = null;
  sub: any = null;
  id: any = null;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.sub = this.dataService
      .getMovieDetails(this.id)
      .subscribe((data) => (this.movie = data));

    this.sub = this.dataService
      .getMovieCredit(this.id)
      .subscribe((data) => (this.actors = data));
  }
}
