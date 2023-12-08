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
  counter = 5;

  constructor(private dataService : DataService){}

  ngOnInit() {
    this.go();
    this.startCounter();
  }

  go(){
    this.sub = this.dataService.getTvRecommendations().subscribe((data) => 
    this.api = data);
  }

  startCounter() {
    setInterval(() => {
      if(this.counter > 0){
        this.counter--;
      }
    }, 1000);
  }
}