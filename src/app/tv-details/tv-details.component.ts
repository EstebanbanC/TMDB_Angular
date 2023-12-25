import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TVDetailsComponent {
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
