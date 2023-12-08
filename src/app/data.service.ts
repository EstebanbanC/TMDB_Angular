import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

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

  id_test = 901362;

  constructor(private httpClient: HttpClient) {}

  getMoviePopular(): Observable<any> {
    return this.httpClient
      .get<any>(
        this.site + 'movie/popular?language=fr&page=1',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }
  getMovieNowPlaying(): Observable<any> {
    return this.httpClient
      .get<any>(
        this.site + 'movie/now_playing?language=en-US&page=1',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }
  getMovieUpComing(): Observable<any> {
    return this.httpClient
      .get<any>(
        this.site + 'movie/upcoming?language=en-US&page=1',
        this.httpOptions
      )
      .pipe(map((e: any) => e.results));
  }

  getMovieDetails(): Observable<any> {
    return this.httpClient.get<any>(
      this.site + 'movie/' + this.id_test + '?language=fr',
      this.httpOptions
    );
  }

  getMovieAlternativeTitles(): Observable<any> {
    return this.httpClient.get<any>(
      this.site + 'movie/' + this.id_test + '/alternative_titles',
      this.httpOptions
    );
  }

  getMovieCredit(): Observable<any> {
    return this.httpClient.get<any>(
      this.site + 'movie/' + this.id_test + '/credits?language=en-US',
      this.httpOptions
    );
  }

  getMovieImages(): Observable<any> {
    return this.httpClient.get<any>(
      this.site + 'movie/' + this.id_test + '/images',
      this.httpOptions
    );
  }
  getMovieRecommendations(): Observable<any> {
    return this.httpClient.get<any>(
      this.site +
        'movie/' +
        this.id_test +
        '/recommendations?language=en-US&page=1',
      this.httpOptions
    );
  }

  getMovieReleaseDates(): Observable<any> {
    return this.httpClient.get<any>(
      this.site + 'movie/' + this.id_test + '/release_dates',
      this.httpOptions
    );
  }
  getMovieRewiews(): Observable<any> {
    return this.httpClient.get<any>(
      this.site + 'movie/' + this.id_test + '/reviews?language=en-US&page=1',
      this.httpOptions
    );
  }

  getMovieSimilar(): Observable<any> {
    return this.httpClient.get<any>(
      this.site + 'movie/' + this.id_test + '/similar?language=en-US&page=1',
      this.httpOptions
    );
  }
}
