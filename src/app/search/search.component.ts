import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  query: string = '';
  sub : any;

  response : any = '';

  movies : any = null;
  tv : any = null;
  actors : any = null;

  searchForm : UntypedFormGroup;
  searchCtrl : FormControl;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe((params) => (this.query = params['query']));

    this.searchCtrl = new FormControl<string>(this.query, { nonNullable: true });
    this.searchForm = new UntypedFormGroup({
      search: this.searchCtrl
    });
    
    this.sub = this.dataService
    .getSearch(this.query)
    .subscribe((data) => {
      this.movies = data.filter((item: any) => item.media_type === "movie");
      this.tv = data.filter((item: any) => item.media_type === "tv");
      this.actors = data.filter((item: any) => item.media_type === "person");
    });

  }

  ngOnChanges() {
    this.getData();
  }


  onSubmit() {
    this.router.navigate(['/search/', this.searchCtrl.value]);
    this.getData();
  }
  getData() {
    this.route.params.subscribe((params) => (this.query = params['query']));

    this.movies = null;
    this.tv = null; 
    this.actors = null;

    this.sub = this.dataService
    .getSearch(this.searchCtrl.value)
    .subscribe((data) => {
      this.movies = data.filter((item: any) => item.media_type === "movie");
      this.tv = data.filter((item: any) => item.media_type === "tv");
      this.actors = data.filter((item: any) => item.media_type === "person");
    });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }   

  truncateDescription(description: string): string {
    return description.length > 50 ? description.substring(0, 150) + '...' : description;
  }

}
