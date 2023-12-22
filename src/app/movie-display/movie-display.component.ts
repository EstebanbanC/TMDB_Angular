import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss'],
})
export class MovieDisplayComponent {
  movie: any = null;
  sub: any = null;
  id: any = null;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.sub = this.dataService
      .getMovieDetails(this.id)
      .subscribe((data) => (this.movie = data));
  }
}
