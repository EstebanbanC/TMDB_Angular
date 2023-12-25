# TMDB_Angular

## Équipe

- [Esteban C](https://github.com/EstebanbanC)
- [Georgia C](https://github.com/georgiaclemencon)
- [Baptiste D](https://github.com/Brazok)

## Présentation

Ce projet est une application web permettant de rechercher des films et d'obtenir des informations sur ces derniers.

## Installation

Pour installer le projet, il faut cloner le repository et installer les dépendances avec la commande `npm install`.

## Lancement

Pour lancer le projet, il faut utiliser la commande `ng serve` et se rendre sur `http://localhost:4200/`.

## Fonctionnalités

- Recherche de films

- Affichage des films les plus populaires

- Affichage des films les mieux notés
  ...

# A FINIR
- ⌛ Formulaire de recherche (Baptiste en cours)
- Tout écrire dans la même langue (front + back)
- Compléter le README
- Amméliorer l'affichage des pages 'details' des films/séries (style, affichage des commentaires laissés par les gens avec ce [style](https://daisyui.com/components/chat/))
- Vérifier les attendus du cahier des charges
-  Vériier s'il n'y a pas de bug

**_NOTE:_**  J'ai fait une liste de tout ce que pouvait faire l'API tout en bas de ce README

# Cahier des charges

## Project description
The project should be a Web application that fetches data from an API and when possible, update data too.

- API can be: 
  - Public API ✅
  - Private API: your own API that is easily available ✅
  - Local server exposing API (json-server for example) ✅
- Web Application should use Angular features such as : 
  - Components ✅
  - Routing ✅
  - Observables ✅
  - Services ✅
  - Interfaces ✅
  - Don't forget an About page with yours name(s) ✅
- Project should have a decent UI, you can use: 
  - Own CSS ✅
  - Third party CSS library (bootstrap, …) ✅
  - Third party components (Angular Material, NgBootstrap, …) ✅

## Delivery

- Project should be delivered before 08 of january ❌
- Packaging can be:
  - Public github repository ✅
  - Private github repository (please add me as viewer) ✅
  - Compressed folder by email to frederic.chauchon@yncrea.fr ✅
- Project must have a proper README that contains:
  - Project description ❌
  - How to use it ❌
  - How to install it (mock server installation, authentication setup, …) ❌
  - If using your own server (like json-server), please add dataset ❌
  - Who have done the projet ❌

⚠️ Project should be delivered without the node_modules directory ❌

## Recommandations
- If you’ve done Specifications, UI design or zonings documents, you can send them with the project too
- Pay attention to:
  - Variables names and types ❌
  - Coding style: The code should be easily readable and consistent in the project ❌
  - Comments: better to understand for everybody ❌
- Please use linter to format your code ❌
- Please don’t copy paste project found on internet ✅


# Données disponibles

## Films

### Général

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-now-playing-list">Now Playing</a></summary>
  <p>https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1</p>
  <ol>
    <code>
    {
  "dates": {
    "maximum": "2023-12-27",
    "minimum": "2023-11-15"
  },
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/bckxSN9ueOgm0gJpVJmPQrecWul.jpg",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 572802,
      "original_language": "en",
      "original_title": "Aquaman and the Lost Kingdom",
      "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
      "popularity": 1891.141,
      "poster_path": "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
      "release_date": "2023-12-20",
      "title": "Aquaman and the Lost Kingdom",
      "video": false,
      "vote_average": 6.613,
      "vote_count": 93
    },
    ...
  ],
  "total_pages": 207,
  "total_results": 4123
}
    </code>
  </ol>
</details>

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-popular-list">Popular</a></summary>
  <p>https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc</p>
  <ol>
    <code>
    {
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/bckxSN9ueOgm0gJpVJmPQrecWul.jpg",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 572802,
      "original_language": "en",
      "original_title": "Aquaman and the Lost Kingdom",
      "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
      "popularity": 1891.141,
      "poster_path": "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
      "release_date": "2023-12-20",
      "title": "Aquaman and the Lost Kingdom",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 102
    },
    ...
  ],
  "total_pages": 41936,
  "total_results": 838712
}
    </code>
  </ol>
</details>

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-top-rated-list">Top Rated</a></summary>
  <p>https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1</p>
  <ol>
    <code>
    {
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 238,
      "original_language": "en",
      "original_title": "The Godfather",
      "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      "popularity": 144.864,
      "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      "release_date": "1972-03-14",
      "title": "The Godfather",
      "video": false,
      "vote_average": 8.708,
      "vote_count": 19167
    },
    ...
  ],
  "total_pages": 452,
  "total_results": 9022
}
    </code>
  </ol>
</details>

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-upcoming-list">Upcoming</a></summary>
  <p>https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1</p>
  <ol>
    <code>
    {
  "dates": {
    "maximum": "2024-01-17",
    "minimum": "2023-12-27"
  },
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/bckxSN9ueOgm0gJpVJmPQrecWul.jpg",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 572802,
      "original_language": "en",
      "original_title": "Aquaman and the Lost Kingdom",
      "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
      "popularity": 1891.141,
      "poster_path": "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
      "release_date": "2023-12-20",
      "title": "Aquaman and the Lost Kingdom",
      "video": false,
      "vote_average": 6.465,
      "vote_count": 101
    },
    ...
  ],
  "total_pages": 29,
  "total_results": 572
}
    </code>
  </ol>
</details>

### Détails

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-details">Details</a></summary>
  <p>https://api.themoviedb.org/3/movie/22?language=en-US</p>
  <ol>
    <code>
    {
  "adult": false,
  "backdrop_path": "/wW7Wt5bXzPy4VOEE4LTIUDyDgBo.jpg",
  "belongs_to_collection": {
    "id": 295,
    "name": "Pirates of the Caribbean Collection",
    "poster_path": "/zRBaZxS5YauLvRYjAdL4AUCwlht.jpg",
    "backdrop_path": "/wxgD3fB5lQ2sGJLog0rvXW049Pf.jpg"
  },
  "budget": 140000000,
  "genres": [
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 28,
      "name": "Action"
    }
  ],
  "homepage": "https://movies.disney.com/pirates-of-the-caribbean-the-curse-of-the-black-pearl",
  "id": 22,
  "imdb_id": "tt0325980",
  "original_language": "en",
  "original_title": "Pirates of the Caribbean: The Curse of the Black Pearl",
  "overview": "Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
  "popularity": 115.616,
  "poster_path": "/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
  "production_companies": [
    {
      "id": 2,
      "logo_path": "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      "name": "Walt Disney Pictures",
      "origin_country": "US"
    },
    {
      "id": 130,
      "logo_path": "/c9dVHPOL3cqCr2593Ahk0nEKTEM.png",
      "name": "Jerry Bruckheimer Films",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2003-07-09",
  "revenue": 655011224,
  "runtime": 143,
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "A dishonest man you can always trust to be dishonest.",
  "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
  "video": false,
  "vote_average": 7.794,
  "vote_count": 19490
}
    </code>
  </ol>
</details>

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-alternative-titles">Alternative Titles</a></summary>
  <p>https://api.themoviedb.org/3/movie/22/alternative_titles</p>
  <ol>
    <code>
{
  "id": 22,
  "titles": [
    {
      "iso_3166_1": "IT",
      "title": "Pirati dei Caraibi - La maledizione della prima luna",
      "type": ""
    },
    ...
  ]
}
    </code>
  </ol>
</details>

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-credits">Credits</a></summary>
  <p>https://api.themoviedb.org/3/movie/22/credits?language=en-US</p>
  <ol>
    <code>
    {
  "id": 22,
  "cast": [
    {
      "adult": false,
      "gender": 2,
      "id": 85,
      "known_for_department": "Acting",
      "name": "Johnny Depp",
      "original_name": "Johnny Depp",
      "popularity": 45.592,
      "profile_path": "/wcI594cwM4ArPwvRd2IU0Z0yLuh.jpg",
      "cast_id": 12,
      "character": "Jack Sparrow",
      "credit_id": "52fe420fc3a36847f8000ecb",
      "order": 0
    },
    ...
  ]
}
    </code>
  </ol>
</details>

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-external-ids">External IDs</a></summary>
  <p>https://api.themoviedb.org/3/movie/22/external_ids</p>
  <ol>
    <code>
    {
  "id": 22,
  "imdb_id": "tt0325980",
  "wikidata_id": "Q46717",
  "facebook_id": "PiratesoftheCaribbean",
  "instagram_id": "disneypirates",
  "twitter_id": "disneypirates"
}
    </code>
  </ol>
</details>

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-images">Images</a></summary>
  <p>https://api.themoviedb.org/3/movie/22/images</p>
  <ol>
    <code>
    {
  "backdrops": [
    {
      "aspect_ratio": 1.778,
      "height": 1080,
      "iso_639_1": null,
      "file_path": "/wW7Wt5bXzPy4VOEE4LTIUDyDgBo.jpg",
      "vote_average": 5.456,
      "vote_count": 5,
      "width": 1920
    },
    ...
  ]
}
    </code>
  </ol>
</details>

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-recommendations">Recommendations</a></summary>
  <p>https://api.themoviedb.org/3/movie/22/recommendations?language=en-US&page=1</p>
  <ol>
    <code>
    {
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/vv5a8u6e40kyH0Hp6HuamAgzRai.jpg",
      "id": 58,
      "title": "Pirates of the Caribbean: Dead Man's Chest",
      "original_language": "en",
      "original_title": "Pirates of the Caribbean: Dead Man's Chest",
      "overview": "Captain Jack Sparrow works his way out of a blood debt with the ghostly Davy Jones to avoid eternal damnation.",
      "poster_path": "/uXEqmloGyP7UXAiphJUu2v2pcuE.jpg",
      "media_type": "movie",
      "genre_ids": [
        12,
        14,
        28
      ],
      "popularity": 87.861,
      "release_date": "2006-07-06",
      "video": false,
      "vote_average": 7.348,
      "vote_count": 15052
    },
    ...
  ],
  "total_pages": 2,
  "total_results": 40
}
    </code>
  </ol>
</details>

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-release-dates">Release Dates</a></summary>
  <p>https://api.themoviedb.org/3/movie/22/release_dates</p>
  <ol>
    <code>
    {
  "id": 22,
  "results": [
    {
      "iso_3166_1": "AR",
      "release_dates": [
        {
          "certification": "Atp",
          "descriptors": [],
          "iso_639_1": "",
          "note": "",
          "release_date": "2003-07-17T00:00:00.000Z",
          "type": 3
        }
      ]
    },
    ...
      ]
}
    </code>
  </ol>
</details>

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-reviews">Reviews</a></summary>
  <p>https://api.themoviedb.org/3/movie/22/reviews?language=en-US&page=1</p>
  <ol>
    <code>
    {
  "id": 22,
  "page": 1,
  "results": [
    {
      "author": "John Chard",
      "author_details": {
        "name": "",
        "username": "John Chard",
        "avatar_path": "/utEXl2EDiXBK6f41wCLsvprvMg4.jpg",
        "rating": 9
      },
      "content": "Ah, but you have heard of me.\r\n\r\nThe crew of the Black Pearl are cursed by something most unimaginable, the only way to lift the curse is to return a lost Aztec coin to its treasure chest home. In the way of them achieving their goal is the British Governor's daughter, the son of Bootstrap Turner, oh and a former comrade by the name of Captain Jack Sparrow who the crew had left to die on an island some time ago.\r\n\r\nIt's now common knowledge that Pirates Of The Caribbean is a film based upon a theme park ride of the same name, thoughg that ride is not actually a roller-coaster, it's fair to say that this film most assuredly is. A swashbuckling ripper of an adventure yarn cramming in every pirate film staple it can and pouring on layers of charm at every turn. Into the broth goes romance, comedy and striking adventure, and director Gore Verbinski even manages to give the children watching little slices of horror, not enough to keep them up at night, but enough to bring on an uneasy grin.\r\n\r\nIt's unashamedly commercial, produced by that purveyor of OTT entertainment values, Jerry Bruckheimer, it was to be expected, but few blockbusting movies of the new age can lay claim to being such an out and out reason for having fun. This is the reason why Pirates had few peers at the time of its release, for it knows its reason for being, it's not taking itself seriously. The audience is not being hoodwinked in any way, they are having fun because so is the film and so is, crucially, the impressive cast. Johnny Depp as Sparrow is having the time of his life, basing the character around the dubious mannerisms of Rolling Stone icon, Keith Richards, it works to its highest potential and Depp is simply wonderful in the role. Keira Knightley (perfectly cast), Orlando Bloom, Geoffrey Rush, Jack Davenport, Jonathan Pryce and Mackenzie Crook all do what was asked, which is essentially say your lines right and have a blast with it, it really is that sort of picture.\r\n\r\nThe subsequent sequels would forget what made this first offering so enjoyable, foregoing the outrageous sense of fun for a dark sheen and character development. That is a shame, but at the very least we still have this wonderful picture to go back to time and time again, to lift you up when one is down or to keep one happy when one is already in that happy place. The Curse Of The Black Pearl is a joy from start to finish. 9/10",
      "created_at": "2014-09-25T23:26:22.631Z",
      "id": "5424a49ec3a3681eca002c23",
      "updated_at": "2021-06-23T15:57:28.700Z",
      "url": "https://www.themoviedb.org/review/5424a49ec3a3681eca002c23"
    },
    ...
  ],
  "total_pages": 1,
  "total_results": 3
}
    </code>
  </ol>
</details>

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-similar">Similar</a></summary>
  <p>https://api.themoviedb.org/3/movie/22/similar?language=en-US&page=1</p>
  <ol>
    <code>
    {
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/pyTDtQCn5sG8gi2zkM5ZylSNmtJ.jpg",
      "genre_ids": [
        12,
        28,
        53
      ],
      "id": 681,
      "original_language": "en",
      "original_title": "Diamonds Are Forever",
      "overview": "Diamonds are stolen only to be sold again in the international market. James Bond infiltrates a smuggling mission to find out who's guilty. The mission takes him to Las Vegas where Bond meets his archenemy Blofeld.",
      "popularity": 32.345,
      "poster_path": "/tOrCHtj4uUOt5p57F3SUwWbsQiE.jpg",
      "release_date": "1971-12-14",
      "title": "Diamonds Are Forever",
      "video": false,
      "vote_average": 6.396,
      "vote_count": 1916
    },
    ...
  ],
  "total_pages": 3574,
  "total_results": 71469
}
    </code>
  </ol>
</details>

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-videos">Videos</a></summary>
  <p>https://api.themoviedb.org/3/movie/22/videos?language=en-US</p>
  <ol>
    <code>
    {
  "id": 22,
  "results": [
    {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Pirates of the Caribbean: The Curse of the Black Pearl Official Trailer 1 (2003) HD",
      "key": "naQr0uTrH_s",
      "published_at": "2013-09-20T00:50:25.000Z",
      "site": "YouTube",
      "size": 1080,
      "type": "Trailer",
      "official": false,
      "id": "58f5210792514127710020ff"
    }
  ]
}
    </code>
  </ol>
</details>

<details>
  <summary><a href="https://developer.themoviedb.org/reference/movie-watch-providers">Watch Providers</a></summary>
  <p>https://api.themoviedb.org/3/movie/22/watch/providers</p>
  <ol>
    <code>
{
  "id": 22,
  "results": {
    "AD": {
      "link": "https://www.themoviedb.org/movie/22-pirates-of-the-caribbean-the-curse-of-the-black-pearl/watch?locale=AD",
      "flatrate": [
        {
          "logo_path": "/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg",
          "provider_id": 337,
          "provider_name": "Disney Plus",
          "display_priority": 7
        }
      ]
    },
    "AE": {
      "link": "https://www.themoviedb.org/movie/22-pirates-of-the-caribbean-the-curse-of-the-black-pearl/watch?locale=AE",
      "buy": [
        {
          "logo_path": "/peURlLlr8jggOwK53fJ5wdQl05y.jpg",
          "provider_id": 2,
          "provider_name": "Apple TV",
          "display_priority": 1
        }
      ],
      "rent": [
        {
          "logo_path": "/peURlLlr8jggOwK53fJ5wdQl05y.jpg",
          "provider_id": 2,
          "provider_name": "Apple TV",
          "display_priority": 1
        }
      ]
    },
    "AL": {
      "link": "https://www.themoviedb.org/movie/22-pirates-of-the-caribbean-the-curse-of-the-black-pearl/watch?locale=AL",
      "buy": [
        {
          "logo_path": "/tbEdFQDwx5LEVr8WpSeXQSIirVq.jpg",
          "provider_id": 3,
          "provider_name": "Google Play Movies",
          "display_priority": 1000
        }
      ],
      "rent": [
        {
          "logo_path": "/tbEdFQDwx5LEVr8WpSeXQSIirVq.jpg",
          "provider_id": 3,
          "provider_name": "Google Play Movies",
          "display_priority": 1000
        }
      ],
      "flatrate": [
        {
          "logo_path": "/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg",
          "provider_id": 337,
          "provider_name": "Disney Plus",
          "display_priority": 7
        }
      ]
    },
    ...
    }
}
    </code>
  </ol>
</details>

## Tv Shows

### Général

- Airing Today
- On The Air
- Popular
- Top Rated

### Détails

- Details
- Account States
- Aggregate Credits
- Alternative Titles
- Changes
- Content Ratings
- Credits
- Episode Groups
- External IDs
- Images
- Keywords
- Latest
- Recommendations
- Reviews
- Screened Theatrically
- Similar
- Translations
- Videos
- Watch Providers

### Tv Saisons

- Details
- Account States
- Aggregate Credits
- Changes
- Credits
- External IDs
- Images
- Translations
- Videos
- Watch Providers

### Tv Episodes

- Details
- Account States
- Changes
- Credits
- External IDs
- Images
- Translations
- Videos

## People

### Général

- Popular

### Détails

- Details
- Changes
- Combined Credits
- External IDs
- Images
- Latest
- Movie Credits
- TV Credits
- Tagged Images
- Translations

## Search

- Collection
- Company
- Keyword
- Movie
- Multi
- Person
- TV

## Trending

- All
- Movies
- People
- TV

<details>
  <summary><a href="">Template .md</a></summary>
  <p></p>
  <ol>
    <code>
    </code>
  </ol>
</details>
