import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie } from './movie';
import { TvShow } from './tv-show';
import { Actor } from './actor';


@Injectable({
  providedIn: 'root'
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

  id_test = 22;
  //  movies: Movie[] = [];
  constructor(private httpClient: HttpClient) { }

  getMoviesPopular(): Observable<Movie[]> {
    return this.httpClient
      .get<Movie[]>(
        this.site + 'movie/popular?language=fr&page=1',
        this.httpOptions
      )
      // function getMovie(e: any): Movie {}
      .pipe(
        map(
          (e: any) => e.results
          // (e: any) =>
          //   e.results.map( (el: any): Movie => ({
          //     backdrop_path: el.backdrop_path,
          //     popularity: el.popularity,
          //     title: el.title,
          //     release_date: el.release_date,
          //     vote_average: el.vote_average,
          //     vote_count: el.vote_count
          //   }))
          // ici nous pouvons faire un map pour chaque propriété de l'objet Movie Mais on est pas obligé de le faire car les propriétés sont les mêmes 'ca match parfaitement'
        )
      )
  }

  getMovieNowPlaying(): Observable<Movie[]> {
    return this.httpClient
      .get<Movie[]>(
        this.site + 'movie/now_playing?language=fr&page=1',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }
  getMovieUpComing(): Observable<Movie[]> {
    return this.httpClient
      .get<Movie[]>(
        this.site + 'movie/upcoming?language=fr&page=1',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }

  getMovieDetails(id: number): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      this.site + 'movie/' + id + '?language=fr',
      this.httpOptions
    );
  }

  getMovieAlternativeTitles(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      this.site + 'movie/' + this.id_test + '/alternative_titles',
      this.httpOptions
    );
  }

  getMovieCredit(id : number): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      this.site + 'movie/' + id + '/credits',
      this.httpOptions
    ).pipe(map((e: any) => e.cast));;
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
      '/recommendations?language=fr&page=1',
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
      this.site + 'movie/' + this.id_test + '/reviews?language=fr&page=1',
      this.httpOptions
    );
  }

  getMovieSimilar(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      this.site + 'movie/' + this.id_test + '/similar?language=fr&page=1',
      this.httpOptions
    );
  }

  getMovieTopRated(): Observable<Movie[]> {
    return this.httpClient
      .get<Movie[]>(this.site + 'movie/top_rated?language=fr&page=1',
        this.httpOptions)
      .pipe(map((e: any) => e.results));
  }


  getTvReleasedToday(): Observable<TvShow[]> {
    return this.httpClient
      .get<TvShow[]>(this.site + 'tv/airing_today?language=fr&page=1', this.httpOptions)
      .pipe(map((e: any) => e.results));
  }

  getTvReleasedPastWeek(): Observable<TvShow[]> {
    return this.httpClient
      .get<TvShow[]>(this.site + 'tv/on_the_air?language=fr&page=1', this.httpOptions)
      .pipe(map((e: any) => e.results));
  }


  getTvPopular(): Observable<TvShow[]> {
    return this.httpClient
      .get<TvShow[]>(this.site + 'discover/tv?include_adult=false&language=fr&page=1&sort_by=popularity.desc', this.httpOptions)
      .pipe(map((e: any) => e.results));
  }

  getTvTopRated(): Observable<TvShow[]> {
    return this.httpClient
      .get<TvShow[]>(this.site + 'discover/tv?include_adult=false&language=fr&page=1&sort_by=vote_average.desc&vote_count.gte=200', this.httpOptions)
      .pipe(map((e: any) => e.results));
  }

  getTvDetails(): Observable<TvShow[]> {
    return this.httpClient
      .get<TvShow[]>(this.site + 'tv/' + this.id_test + '?language=fr', this.httpOptions)
  }

  getTvAlternativeTitles(): Observable<TvShow[]> {
    return this.httpClient
      .get<TvShow[]>(this.site + 'tv/' + this.id_test + '/alternative_titles', this.httpOptions)
  }

  getTvCredits(): Observable<TvShow[]> {
    return this.httpClient
      .get<TvShow[]>(this.site + 'tv/' + this.id_test + '/credits?language=fr', this.httpOptions)
  }

  getTvImages(): Observable<TvShow[]> {
    return this.httpClient
      .get<TvShow[]>(this.site + 'tv/' + this.id_test + '/images', this.httpOptions)
  }

  getTvRecommendations(): Observable<TvShow[]> {
    return this.httpClient
      .get<TvShow[]>(this.site + 'tv/' + this.id_test + '/recommendations?language=fr&page=1', this.httpOptions)
  }

  getActors(): Observable<Actor[]> {
    return this.httpClient
      .get<TvShow[]>(this.site + '/person/popular?language=fr&page=1', this.httpOptions)
      .pipe(map((e: any) => e.results));
  }

  getActorDetails(id: number): Observable<Actor> {
    return this.httpClient
      .get<Actor[]>(this.site + '/person/' + id + '?language=en-US' , this.httpOptions)
        .pipe(map((e: any) => e));
  }
  getActorMovieCredits(id: number): Observable<[]> {
    return this.httpClient
    .get<[]>(this.site + '/person/' + id + '/movie_credits?language=en-US' , this.httpOptions)
      .pipe(map((e: any) => e.cast));
  }

}
