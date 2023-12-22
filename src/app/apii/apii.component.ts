
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-apii',
  templateUrl: './apii.component.html',
  styleUrls: ['./apii.component.scss']
})

export class ApiiComponent implements OnInit {

  api : any = ''
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
    this.sub = this.dataService.getMoviePopular().subscribe((data) => 
    this.api = data)
    
  }

    goMovieNowPlaying(){
    this.sub = this.dataService.getMovieNowPlaying().subscribe((data) => 
    this.api = data)
    
  }

    goMovieUpComing(){
    this.sub = this.dataService.getMovieUpComing().subscribe((data) => 
    this.api = data)
    
  }
  

  goMovieDetails(){
    this.sub = this.dataService.getMovieDetails(22).subscribe((data) => 
    this.api = data)
    
  }

  goMovieAlternativeTitles(){
    this.sub = this.dataService.getMovieAlternativeTitles().subscribe((data) => 
    this.api = data)
    
  }
  
  goMovieCredit(){
    this.sub = this.dataService.getMovieCredit().subscribe((data) => 
    this.api = data)
    
  }

  goMovieImages(){
    this.sub = this.dataService.getMovieImages().subscribe((data) => 
    this.api = data)
    
  }

  goMovieRecommendations(){
    this.sub = this.dataService.getMovieRecommendations().subscribe((data) => 
    this.api = data)
    
  }

  goMovieReleaseDates(){
    this.sub = this.dataService.getMovieReleaseDates().subscribe((data) => 
    this.api = data)
    
  }
  goMovieRewiews(){
    this.sub = this.dataService.getMovieRewiews().subscribe((data) => 
    this.api = data)
    
  }
  goMovieSimilar(){
    this.sub = this.dataService.getMovieSimilar().subscribe((data) => 
    this.api = data)
    
  }

}
