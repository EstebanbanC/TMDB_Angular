import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-upcoming',
  templateUrl: './movie-upcoming.component.html',
  styleUrls: ['./movie-upcoming.component.scss']
})
export class MovieUpcomingComponent implements OnInit {
  movieList: any = ''; // Liste des films
  sub: any = null; // Abonnement

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.getMoviePopular(); // Appel de la fonction pour récupérer les films populaires
  }

  getMoviePopular() {
    this.sub = this.dataService.getMovieUpComing().subscribe((data) =>
      this.movieList = data); // Récupère les films à venir et les assigne à la liste des films
  }

  truncateDescription(description: string): string {
    return description.length > 50 ? description.substring(0, 150) + '...' : description; // Tronque la description si elle dépasse 50 caractères
  }
}
