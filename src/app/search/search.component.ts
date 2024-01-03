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
    // Crée les contrôles de formulaire pour la recherche et le contenu adulte
    this.searchCtrl = new FormControl<string>('', {
      nonNullable: true,
    });
    this.adultCtrl = new FormControl<boolean>(false, {
      nonNullable: true,
    });
    // Crée le groupe de formulaire non typé avec les contrôles de recherche et de contenu adulte
    this.searchForm = new UntypedFormGroup({
      search: this.searchCtrl,
      adult_content: this.adultCtrl,
    });
    // Récupère les données initiales
    this.getData();
  }

  // Méthode appelée lorsque les propriétés de la classe changent
  ngOnChanges() {
    // Met à jour la valeur du contrôle de contenu adulte
    this.adultCtrl.setValue(this.adult);

    // Récupère les données
    this.getData();
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    // Navigue vers la page de recherche avec les valeurs du formulaire
    this.router.navigate([
      '/search/',
      this.searchCtrl.value,
      this.adultCtrl.value,
    ]);
    // Récupère les données
    this.getData();
  }

  // Récupère les données de recherche
  getData() {
    // Souscrit aux paramètres de l'URL
    this.route.params.subscribe((params) => {
      this.query = params['query'];
      this.adult = params['adult'];
      // Met à jour la valeur du contrôle de recherche avec la valeur du paramètre
      this.searchCtrl.setValue(this.query);
      this.adultCtrl.setValue(this.adult);
    });

    // Réinitialise les tableaux de films, séries et acteurs
    this.movies = [];
    this.tv = [];
    this.actors = [];

    // Appelle le service de données pour récupérer les résultats de recherche
    this.sub = this.dataService
      .getSearch(this.searchCtrl.value, this.adultCtrl.value)
      .subscribe((data) => {
        // Filtre les résultats par type de média (film, série, acteur)
        this.movies = data.filter((item: any) => item.media_type === 'movie');
        this.tv = data.filter((item: any) => item.media_type === 'tv');
        this.actors = data.filter((item: any) => item.media_type === 'person');
      });
  }

  // Méthode appelée lors de la destruction du composant
  ngOnDestroy() {
    // Se désabonne de l'observable pour éviter les fuites de mémoire
    this.sub.unsubscribe();
  }

  // Tronque la description pour la limiter à 50 caractères
  truncateDescription(description: string): string {
    return description.length > 50
      ? description.substring(0, 150) + '...'
      : description;
  }
}
