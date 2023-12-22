import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movieList : any = ''
  sub : any = null

  constructor(private dataService : DataService){

  }
  ngOnInit() {
    this.getMoviePopular()
    
  }

  getMoviePopular(){
    this.sub = this.dataService.getMoviesPopular().subscribe((data) => 
    this.movieList = data)
    
  }
}
