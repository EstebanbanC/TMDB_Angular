import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-top-100',
  templateUrl: './movie-top-100.component.html',
  styleUrls: ['./movie-top-100.component.scss']
})
export class MovieTop100Component {
  MovieTop100 : any = ''
  sub : any = null
JSON: any;

  constructor(private dataService : DataService){

  }
  ngOnInit() {
    this.sub = this.dataService.getMovieTopRated().subscribe((data) => 
    this.MovieTop100 = data)
    
  }
}
