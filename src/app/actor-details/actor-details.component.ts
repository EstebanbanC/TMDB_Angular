import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent {
  actor: any = null;
  movies: any = null;

  sub: any = null;
  id: any = null;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe((params) => (this.id = params['id']));

    this.sub = this.dataService
      .getActorDetails(this.id)
      .subscribe((data) => (this.actor = data));

    this.sub = this.dataService
      .getActorMovieCredits(this.id)
      .subscribe((data) => (this.movies = data));
    
  }

}
