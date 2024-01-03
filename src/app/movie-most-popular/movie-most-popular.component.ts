import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-most-popular',
  templateUrl: './movie-most-popular.component.html',
  styleUrls: ['./movie-most-popular.component.scss']
})
export class MovieMostPopularComponent implements OnInit {
  movieList: any = ''; // Liste des films
  sub: any = null; // Abonnement

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.getMoviePopular(); // Appel de la fonction pour récupérer les films populaires
  }

  getMoviePopular() {
    this.sub = this.dataService.getMoviesPopular().subscribe((data) =>
      this.movieList = data); // Récupère les films populaires et les assigne à la liste de films
  }

  truncateDescription(description: string): string {
    return description.length > 50 ? description.substring(0, 150) + '...' : description; // Tronque la description si elle dépasse 50 caractères
  }
}
