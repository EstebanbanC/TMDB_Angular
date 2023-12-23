import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-display',
  templateUrl: './show-display.component.html',
  styleUrls: ['./show-display.component.scss']
})
export class ShowDisplayComponent {
  show: any = null;
  actors :any = null;

  sub: any = null;
  id: any = null;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.sub = this.dataService
      .getTvDetails(this.id)
      .subscribe((data) => (this.show = data));

    this.sub = this.dataService
      .getTvCredits(this.id)
      .subscribe((data) => (this.actors = data));
  }
}
