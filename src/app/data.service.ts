import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

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

  id_test = '1';
  
  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<any> {

    return this.httpClient
      .get<any>(this.site, this.httpOptions)
      .pipe(map((e: any) => e.results));
  }

  getMovieTopRated(): Observable<any> {
    return this.httpClient
      .get<any>(this.site + 'movie/top_rated?language=fr&page=1', this.httpOptions)
      .pipe(map((e: any) => e.results));
  }


  getTvReleasedToday(): Observable<any> {
    return this.httpClient
      .get<any>(this.site + 'tv/airing_today?language=fr&page=1', this.httpOptions)
      .pipe(map((e: any) => e.results));
  }

  getTvReleasedPastWeek(): Observable<any> {
    return this.httpClient
      .get<any>(this.site + 'tv/on_the_air?language=fr&page=1', this.httpOptions)
      .pipe(map((e: any) => e.results));
  }


  getTvPopular(): Observable<any> {
    return this.httpClient
      .get<any>(this.site + 'discover/tv?include_adult=false&language=fr&page=1&sort_by=popularity.desc', this.httpOptions)
      .pipe(map((e: any) => e.results));
  }

  getTvTopRated(): Observable<any> {
    return this.httpClient
      .get<any>(this.site + 'discover/tv?include_adult=false&language=fr&page=1&sort_by=vote_average.desc&vote_count.gte=200', this.httpOptions)
      .pipe(map((e: any) => e.results));
  }

  getTvDetails(): Observable<any> {
    return this.httpClient
      .get<any>(this.site + 'tv/' + this.id_test +'?language=fr', this.httpOptions)
  }

  getTvAlternativeTitles(): Observable<any> {
    return this.httpClient
      .get<any>(this.site + 'tv/' + this.id_test +'/alternative_titles', this.httpOptions)
  }

  getTvCredits(): Observable<any> {
    return this.httpClient
      .get<any>(this.site + 'tv/' + this.id_test +'/credits?language=fr', this.httpOptions)
  }

  getTvImages(): Observable<any> {
    return this.httpClient
      .get<any>(this.site + 'tv/' + this.id_test +'/images', this.httpOptions)
  }

  getTvRecommendations(): Observable<any> {
    return this.httpClient
      .get<any>(this.site + 'tv/' + this.id_test +'/recommendations?language=fr&page=1', this.httpOptions)
  }

}
