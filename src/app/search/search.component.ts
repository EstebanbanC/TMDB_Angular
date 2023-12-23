import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  query: string = '';
  sub : any;

  response : any = '';

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe((params) => (this.query = params['query']));

    this.sub = this.dataService
    .getSearch(this.query)
    .subscribe((data) => (this.response = data));
  }
}
