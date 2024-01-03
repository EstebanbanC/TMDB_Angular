import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent {
  actor: any = null; // Déclare une variable pour stocker les détails de l'acteur
  movies: any = null; // Déclare une variable pour stocker les crédits de films de l'acteur

  sub: any = null; // Déclare une variable pour stocker l'abonnement à l'observable
  id: any = null; // Déclare une variable pour stocker l'ID de l'acteur

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe((params) => (this.id = params['id'])); // Souscrit aux modifications des paramètres de l'URL et met à jour l'ID de l'acteur

    this.sub = this.dataService
      .getActorDetails(this.id)
      .subscribe((data) => (this.actor = data)); // Appelle le service de données pour obtenir les détails de l'acteur et met à jour la variable 'actor'

    this.sub = this.dataService
      .getActorMovieCredits(this.id)
      .subscribe((data) => (this.movies = data)); // Appelle le service de données pour obtenir les crédits de films de l'acteur et met à jour la variable 'movies'
  }
}
