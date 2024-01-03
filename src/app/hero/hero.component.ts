import { Component } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
import { OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  darkMode!: boolean; // Mode sombre
  backgroundImageUrl!: string; // URL de l'image de fond

  sub : any = null; // Abonnement
  lastRelease : any = null; // Dernière sortie

  constructor(private darkModeService: DarkModeService, private dataService : DataService) {}

  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((mode) => {
      this.darkMode = mode;
    });

    this.darkModeService.backgroundImage$.subscribe((imageUrl) => {
      this.backgroundImageUrl = imageUrl;
    });
    this.getLastRelease()
  }

  getLastRelease(){

    this.sub = this.dataService.getMovieNowPlaying().subscribe((data) => 
      this.lastRelease = data[0]);
  
  }
}