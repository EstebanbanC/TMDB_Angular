import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent {
  actors : any = null
  sub : any = null
  constructor(private dataService: DataService){
    this.sub = this.dataService
    .getActors()
    .subscribe((data) => (this.actors = data));
  }

}
