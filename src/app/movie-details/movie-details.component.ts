// Importation des modules et services nécessaires
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  movie: any = null; // Variable pour stocker les détails du film
  actors: any = null; // Variable pour stocker les acteurs du film
  sub: any = null; // Variable pour stocker l'abonnement
  id: any = null; // Variable pour stocker l'ID du film

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    // Récupération de l'ID du film à partir des paramètres de la route
    this.route.params.subscribe((params) => (this.id = params['id']));

    // Abonnement à la méthode getMovieDetails du DataService pour obtenir les détails du film
    this.sub = this.dataService
      .getMovieDetails(this.id)
      .subscribe((data) => (this.movie = data));

    // Abonnement à la méthode getMovieCredit du DataService pour obtenir les acteurs du film
    this.sub = this.dataService
      .getMovieCredit(this.id)
      .subscribe((data) => (this.actors = data));
  }
}
