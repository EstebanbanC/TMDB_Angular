import { Component, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy, OnChanges {
  query = '';
  adult = false;
  sub: any;

  response: any = '';

  movies: any = [];
  tv: any = [];
  actors: any = [];

  searchForm: UntypedFormGroup;
  searchCtrl: FormControl;
  adultCtrl: FormControl;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.searchCtrl = new FormControl<string>('', {
      nonNullable: true,
    });
    this.adultCtrl = new FormControl<boolean>(false, {
      nonNullable: true,
    });
    this.searchForm = new UntypedFormGroup({
      search: this.searchCtrl,
      adult_content: this.adultCtrl,
    });
    this.getData();
  }

  // ngOnChanges() {
  //   this.adultCtrl.setValue(this.adult);

  //   this.getData();
  // }

  ngOnChanges() {
    this.getData();
  }

  onSubmit() {
    this.router.navigate([
      '/search/',
      this.searchCtrl.value,
      this.adultCtrl.value,
    ]);
    this.getData();
  }

  getData() {
    this.route.params.subscribe((params) => {
      this.query = params['query'];
      this.adult = params['adult'];
      this.searchCtrl.setValue(this.query);
    this.adultCtrl.setValue(this.adult);
    })



    this.movies = [];
    this.tv = [];
    this.actors = [];

    this.sub = this.dataService
      .getSearch(this.searchCtrl.value, this.adultCtrl.value)
      .subscribe((data) => {
        this.movies = data.filter((item: any) => item.media_type === 'movie');
        this.tv = data.filter((item: any) => item.media_type === 'tv');
        this.actors = data.filter((item: any) => item.media_type === 'person');
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  truncateDescription(description: string): string {
    return description.length > 50
      ? description.substring(0, 150) + '...'
      : description;
  }
}
