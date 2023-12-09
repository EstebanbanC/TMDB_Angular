import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit{
  TvShowList : any = ''
  sub : any = null

  constructor(private dataService : DataService){

  }
  ngOnInit() {
    this.getTvShowPopular()
  }

  getTvShowPopular(){
    this.sub = this.dataService.getTvPopular().subscribe((data) => 
    this.TvShowList = data)
    
  }
}
