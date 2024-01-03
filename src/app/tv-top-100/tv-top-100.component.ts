import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tv-top-100',
  templateUrl: './tv-top-100.component.html',
  styleUrls: ['./tv-top-100.component.scss']
})
export class TVTop100Component implements OnInit {
  TvShowList : any = ''
  sub : any = null

  constructor(private dataService : DataService){

  }
  ngOnInit() {
    this.getTvShowPopular()
  }

  getTvShowPopular(){
    this.sub = this.dataService.getTvTopRated().subscribe((data) => 
    this.TvShowList = data)
    
  }
  truncateDescription(description: string): string {
    return description.length > 50 ? description.substring(0, 150) + '...' : description;
  }
}
