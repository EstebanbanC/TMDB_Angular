# TMDB_Angular

## Présentation

Ce projet est une application web créée dans le cadre de nos cours sur Angular, permettant d'interagir avec une API.

Les membres de l'équipe sont :

- [Esteban C](https://github.com/EstebanbanC)
- [Georgia C](https://github.com/georgiaclemencon)
- [Baptiste D](https://github.com/Brazok)

Notre API est celle du site [themoviedb](https://developer.themoviedb.org/), qui nous fournit diverses informations sur des films, des séries et des acteurs, notamment :

- Top 100
- Les plus populaires
- En salle actuellement
- À venir

Sur notre site, il est également possible d'effectuer des recherches sur des films, des séries et des acteurs, ainsi que de consulter les détails de chacun.

En ce qui concerne le style, nous avons utilisé DaisyUI, qui s'appuie sur le framework Tailwind.

## Installation

Pour installer le projet, il faut :

- Cloner le repository 

`git clone https://github.com/EstebanbanC/TMDB_Angular.git`

- Installer les dépendances  

`npm install`.

## Lancement

Pour lancer le projet, il faut utiliser la commande `ng serve` et se rendre sur `http://localhost:4200/`.

## Arborescence

```bash
.
├── README.md
├── angular.json
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── about/
│   │   ├── actor-details/
│   │   ├── actors/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── home/
│   │   ├── movie-details/
│   │   ├── movie-footer/
│   │   ├── movie-most-popular/
│   │   ├── movie-top-100/
│   │   ├── movie-upcoming/
│   │   ├── search/
│   │   ├── star/
│   │   ├── tv-details/
│   │   ├── tv-footer/
│   │   ├── tv-most-popular/
│   │   ├── tv-top-100/
│   │   ├── actor.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── dark-mode.service.spec.ts
│   │   ├── dark-mode.service.ts
│   │   ├── data.service.spec.ts
│   │   ├── data.service.ts
│   │   ├── movie.ts
│   │   └── tv-show.ts
│   ├── assets/
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
``` 

