import { Component } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  darkMode!: boolean;
  backgroundImageUrl!: string;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((mode) => {
      this.darkMode = mode;
    });

    this.darkModeService.backgroundImage$.subscribe((imageUrl) => {
      this.backgroundImageUrl = imageUrl;
    });
  }
}