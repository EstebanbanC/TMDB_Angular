import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actors-display',
  templateUrl: './actors-display.component.html',
  styleUrls: ['./actors-display.component.scss']
})
export class ActorsDisplayComponent {
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
