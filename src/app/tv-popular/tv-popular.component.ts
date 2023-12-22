import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tv-popular',
  templateUrl: './tv-popular.component.html',
  styleUrls: ['./tv-popular.component.scss']
})
export class TVPopularComponent {
  TVpopular : any = ''
  sub : any = null
JSON: any;

  constructor(private dataService : DataService){

  }
  ngOnInit() {
    this.sub = this.dataService.getTvTopRated().subscribe((data) => 
    this.TVpopular = data)
    
  }

}
