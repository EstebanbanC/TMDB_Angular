import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tv-top-100',
  templateUrl: './tv-top-100.component.html',
  styleUrls: ['./tv-top-100.component.scss']
})
export class TVTop100Component {

  TVTop100 : any = ''
  sub : any = null
JSON: any;

  constructor(private dataService : DataService){

  }
  ngOnInit() {
    this.sub = this.dataService.getTvTopRated().subscribe((data) => 
    this.TVTop100 = data)
    
  }
}
