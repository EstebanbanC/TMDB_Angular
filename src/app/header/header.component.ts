import { Component } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
import { FormBuilder, FormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  darkMode: boolean = false; // Initialize the property

  searchForm : UntypedFormGroup;
  searchCtrl = new FormControl<string>('', { nonNullable: true });
  

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
  constructor(private darkModeService: DarkModeService, public router: Router) {
    this.searchForm = new UntypedFormGroup({
      search: this.searchCtrl
    });

  }

  submit() {
    console.log("Header submit" + this.searchCtrl.value);
    this.router.navigate(['/search/', this.searchCtrl.value]);
    this.searchCtrl.setValue('');
    
  }
}
