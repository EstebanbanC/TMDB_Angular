import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tv-most-popular',
  templateUrl: './tv-most-popular.component.html',
  styleUrls: ['./tv-most-popular.component.scss']
})
export class TvMostPopularComponent {
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
  truncateDescription(description: string): string {
    return description.length > 50 ? description.substring(0, 150) + '...' : description;
  }
}
