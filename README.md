# ClimateSwipe

![GitHub release (latest by date)](https://img.shields.io/github/v/release/ofachati/ClimateSwipe)
<img alt="GitHub tag (latest by date)" src="https://img.shields.io/github/v/tag/ofachati/ClimateSwipe">
<a href="https://www.codacy.com/gh/ofachati/ClimateSwipe/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ofachati/ClimateSwipe&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/a4e163d604aa457b8374bec4c79e0d44"/></a>
[![CircleCI](https://img.shields.io/circleci/build/github/ofachati/ClimateSwipe/main)](https://dl.circleci.com/status-badge/redirect/gh/ofachati/nuit_info_front/tree/main)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/ofachati/nuit_info_front)](https://codeclimate.com/github/ofachati/nuit_info_front/maintainability)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/d87436632bff4f2ab2bb25c95c763886)](https://app.codacy.com/gh/ofachati/nuit_info_front/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

**ClimateSwipe**, l'application innovante pour une prise de conscience ludique du changement climatique.

## Notre Équipe

Notre équipe est composée de Mohamed et Omar, deux étudiants en Master 2 de l’Université de Paris Nanterre. Ensemble, nous avons conçu ClimateSwipe et son logo, ajoutant une touche personnelle à notre projet.

## À propos de ClimateSwipe

### Objectif

ClimateSwipe est une plateforme interactive visant à éduquer de façon ludique sur le changement climatique, démystifiant les enjeux environnementaux et promouvant des solutions durables.

### Fonctionnement Global

ClimateSwipe offre une expérience de "swiping" engageante pour apprendre sur le changement climatique. Des réponses instantanées rendent l'apprentissage divertissant.

### TL;DR

Utilisant Angular pour le front-end et FastAPI pour le back-end, ClimateSwipe assure une expérience utilisateur fluide et intuitive.

## Caractéristiques Principales

### Interface Conviviale

L'interface intuitive de ClimateSwipe rend l'apprentissage sur le changement climatique accessible à tous.

## Construit avec

- ![Angular][angular.js]
- ![FastAPI][fastapi.js]
- ![MongoDB][mongodb.com]
- ![Heroku][heroku.com]

## Manuel d'installation et d'utilisation

Suivez ces étapes pour lancer l'application :

1. Ouvrez un terminal et faites un `git clone https://github.com/ofachati/ClimateSwipe` sur votre Desktop.

2. Installez [nodeJS](https://nodejs.org/fr/download/current/) et [Angular CLI](https://angular.io/cli).

3. Rendez-vous dans le dossier `branches/climateswipe-frontend`, exécutez les commandes suivantes :

npm install
ng serve


4. Pour le backend, allez dans `branches/climateswipe-backend` :

pip install -r requirements.txt
uvicorn main:app --reload


Cela lancera le frontend Angular sur `http://localhost:4200/` et le backend FastAPI sur `http://localhost:8000/`.

## Auteurs

- [Omar EL FACHATI](https://github.com/ofachati)
- [Mohamed KONATE](https://github.com/MohamedKonate)

## Contributions

Les contributions sont essentielles dans la communauté open source. Nous apprécions grandement toutes les suggestions et contributions.

Pour contribuer :

1. Fork le projet
2. Créez votre Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez votre branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## License

Distribué sous la licence [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Voir le fichier LICENSE pour plus d'informations.

<!-- MARKDOWN LINKS & IMAGES -->

[angular.js]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[fastapi.js]: https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white
