import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie } from './movie';
import { TvShow } from './tv-show';
import { Actor } from './actor';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  site = 'https://api.themoviedb.org/3/';
  httpOptions = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTE5ZGIwZjM1YmVlMTQxNWNjZTQ0NzEyNjRlMzIyZCIsInN1YiI6IjY1NTdiOTc0YjU0MDAyMTRjZjM5NTQzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VIC7f05xtAfGB1fO0yy-a-C8TIS1PGD6iXjONaFmzDM',
      accept: 'application/json',
    },
  };

  langage = 'en-US';
  adult_content = false;
  id_test = 22;

  constructor(private httpClient: HttpClient) {}

  // FONCTIONS UTILISÉES
  // Obtenir les films populaires
  getMoviesPopular(): Observable<Movie[]> {
    return this.httpClient
      .get<Movie[]>(
        this.site + 'movie/popular?language=' + this.langage + '&page=1',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }

  // Obtenir les films en cours de diffusion
  getMovieNowPlaying(): Observable<Movie[]> {
    return this.httpClient
      .get<Movie[]>(
        this.site + 'movie/now_playing?language=' + this.langage + '&page=1',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }

  // Obtenir les films à venir
  getMovieUpComing(): Observable<Movie[]> {
    return this.httpClient
      .get<Movie[]>(
        this.site + 'movie/upcoming?language=' + this.langage + '&page=1',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }

  // Obtenir les détails d'un film
  getMovieDetails(id: number): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      this.site + 'movie/' + id + '?language=' + this.langage + '',
      this.httpOptions
    );
  }

  // Obtenir les crédits d'un film
  getMovieCredit(id: number): Observable<Movie[]> {
    return this.httpClient
      .get<Movie[]>(this.site + 'movie/' + id + '/credits', this.httpOptions)
      .pipe(map((e: any) => e.cast));
  }

  // Obtenir les films les mieux notés
  getMovieTopRated(): Observable<Movie[]> {
    return this.httpClient
      .get<Movie[]>(
        this.site + 'movie/top_rated?language=' + this.langage + '&page=1',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }

  // Obtenir les acteurs populaires
  getActors(): Observable<Actor[]> {
    return this.httpClient
      .get<TvShow[]>(
        this.site + '/person/popular?language=' + this.langage + '&page=1',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }

  // Obtenir les détails d'un acteur
  getActorDetails(id: number): Observable<Actor> {
    return this.httpClient
      .get<Actor[]>(
        this.site + '/person/' + id + '?language=' + this.langage,
        this.httpOptions
      )
      .pipe(map((e: any) => e));
  }

  // Obtenir les crédits de films d'un acteur
  getActorMovieCredits(id: number): Observable<[]> {
    return this.httpClient
      .get<[]>(
        this.site + '/person/' + id + '/movie_credits?language=' + this.langage,
        this.httpOptions
      )
      .pipe(map((e: any) => e.cast));
  }

  // Effectuer une recherche
  getSearch(query: string, adult_content: boolean): Observable<[]> {
    return this.httpClient
      .get<[]>(
        this.site +
          'search/multi?query=' +
          query +
          '&include_adult=' +
          adult_content +
          '&language=' +
          this.langage +
          '&page=1',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }

  // Obtenir les séries TV populaires
  getTvPopular(): Observable<TvShow[]> {
    return this.httpClient
      .get<TvShow[]>(
        this.site +
          'discover/tv?include_adult=' +
          this.adult_content +
          '&language=' +
          this.langage +
          '&page=1&sort_by=popularity.desc',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }

  // Obtenir les séries TV les mieux notées
  getTvTopRated(): Observable<TvShow[]> {
    return this.httpClient
      .get<TvShow[]>(
        this.site +
          'discover/tv?include_adult=' +
          this.adult_content +
          '&language=' +
          this.langage +
          '&page=1&sort_by=vote_average.desc&vote_count.gte=200',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }

  // Obtenir les détails d'une série TV
  getTvDetails(id: number): Observable<[]> {
    return this.httpClient.get<[]>(
      this.site + 'tv/' + id + '?language=' + this.langage + '',
      this.httpOptions
    );
  }

  // Obtenir les crédits d'une série TV
  getTvCredits(id: number): Observable<[]> {
    return this.httpClient
      .get<[]>(
        this.site + 'tv/' + id + '/credits?language=' + this.langage,
        this.httpOptions
      )
      .pipe(map((e: any) => e.cast));
  }

  // FONCTIONS NON UTILISÉES
  // Les fonctions suivantes sont commentées
  /*
  getMovieAlternativeTitles(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      this.site + 'movie/' + this.id_test + '/alternative_titles',
      this.httpOptions
    );
  }

  getMovieImages(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      this.site + 'movie/' + this.id_test + '/images',
      this.httpOptions
    );
  }

  getMovieRecommendations(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      this.site +
        'movie/' +
        this.id_test +
        '/recommendations?language=' +
        this.langage +
        '&page=1',
      this.httpOptions
    );
  }

  getMovieReleaseDates(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      this.site + 'movie/' + this.id_test + '/release_dates',
      this.httpOptions
    );
  }

  getMovieRewiews(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      this.site +
        'movie/' +
        this.id_test +
        '/reviews?language=' +
        this.langage +
        '&page=1',
      this.httpOptions
    );
  }

  getMovieSimilar(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      this.site +
        'movie/' +
        this.id_test +
        '/similar?language=' +
        this.langage +
        '&page=1',
      this.httpOptions
    );
  }

  getTvReleasedToday(): Observable<TvShow[]> {
    return this.httpClient
      .get<TvShow[]>(
        this.site + 'tv/airing_today?language=' + this.langage + '&page=1',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }

  getTvReleasedPastWeek(): Observable<TvShow[]> {
    return this.httpClient
      .get<TvShow[]>(
        this.site + 'tv/on_the_air?language=' + this.langage + '&page=1',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }

  getTvImages(): Observable<TvShow[]> {
    return this.httpClient.get<TvShow[]>(
      this.site + 'tv/' + this.id_test + '/images',
      this.httpOptions
    );
  }

  getTvRecommendations(): Observable<TvShow[]> {
    return this.httpClient.get<TvShow[]>(
      this.site +
        'tv/' +
        this.id_test +
        '/recommendations?language=' +
        this.langage +
        '&page=1',
      this.httpOptions
    );
  }

  getTvAlternativeTitles(): Observable<TvShow[]> {
    return this.httpClient.get<TvShow[]>(
      this.site + 'tv/' + this.id_test + '/alternative_titles',
      this.httpOptions
    );
  }
  */
}
