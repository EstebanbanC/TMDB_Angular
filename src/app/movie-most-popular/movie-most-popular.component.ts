import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-most-popular',
  templateUrl: './movie-most-popular.component.html',
  styleUrls: ['./movie-most-popular.component.scss']
})
export class MovieMostPopularComponent {

  MoviePopular : any = ''
  sub : any = null
JSON: any;

  constructor(private dataService : DataService){

  }
  ngOnInit() {
    this.sub = this.dataService.getMoviePopular().subscribe((data) => 
    this.MoviePopular = data)
    
  }
}
