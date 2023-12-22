
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-apii',
  templateUrl: './apii.component.html',
  styleUrls: ['./apii.component.scss']
})

export class ApiiComponent implements OnInit {

  api!: any
  Movie!: Movie[]
  sub : any = null

  constructor(private dataService : DataService){

  }

  ngOnInit() {
    this.goMovieSimilar()
    
  }
// exemple
  // go(){
  //   this.sub = this.dataService.getMovie().subscribe((data) => 
  //   this.api = data)
    
  // }
  goMoviePopular(){
    this.sub = this.dataService.getMoviesPopular().subscribe((data) => 
    this.Movie = data)
    
  }

    goMovieNowPlaying(){
    this.sub = this.dataService.getMovieNowPlaying().subscribe((data) => 
    this.Movie = data)
    
  }

    goMovieUpComing(){
    this.sub = this.dataService.getMovieUpComing().subscribe((data) => 
    this.Movie = data)
    
  }
  

  goMovieDetails(){
    this.sub = this.dataService.getMovieDetails(22).subscribe((data) => 
    this.Movie = data)
    
  }

  goMovieAlternativeTitles(){
    this.sub = this.dataService.getMovieAlternativeTitles().subscribe((data) => 
    this.Movie = data)
    
  }
  
  goMovieCredit(){
    this.sub = this.dataService.getMovieCredit().subscribe((data) => 
    this.Movie = data)
    
  }

  goMovieImages(){
    this.sub = this.dataService.getMovieImages().subscribe((data) => 
    this.Movie = data)
    
  }

  goMovieRecommendations(){
    this.sub = this.dataService.getMovieRecommendations().subscribe((data) => 
    this.Movie = data)
    
  }

  goMovieReleaseDates(){
    this.sub = this.dataService.getMovieReleaseDates().subscribe((data) => 
    this.Movie = data)
    
  }
  goMovieRewiews(){
    this.sub = this.dataService.getMovieRewiews().subscribe((data) => 
    this.Movie = data)
    
  }
  goMovieSimilar(){
    this.sub = this.dataService.getMovieSimilar().subscribe((data) => 
    this.Movie  = data)
    
  }

}
