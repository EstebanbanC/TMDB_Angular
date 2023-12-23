import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TVDetailsComponent {

  TVshow : any = ''
  sub : any = null

  constructor(private dataService : DataService){

  }
  ngOnInit() {
    this.sub = this.dataService.getTvDetails(22).subscribe((data) => 
    this.TVshow = data)
    
  }

}
