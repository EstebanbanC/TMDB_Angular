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
    this.sub = this.dataService.getMoviePopular().subscribe((data) => 
    this.movieList = data)
    

  }

  truncateDescription(description: string): string {
    return description.length > 50 ? description.substring(0, 150) + '...' : description;
  }
}
