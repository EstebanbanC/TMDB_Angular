import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent {
  actors : any = null // Déclare une variable actors de type any initialisée à null
  sub : any = null // Déclare une variable sub de type any initialisée à null

  constructor(private dataService: DataService){
    this.sub = this.dataService // Assigne à la variable sub le résultat de l'appel à la méthode getActors() du service DataService
    .getActors()
    .subscribe((data) => (this.actors = data)); // Souscrit à l'observable retourné par getActors() et assigne les données retournées à la variable actors
  }
}
