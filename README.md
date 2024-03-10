![logo-no-background](https://github.com/ofachati/ClimateSwipe/assets/67542830/30906c7e-157c-4389-a739-72966e796469)

<div align="center">

# ClimateSwipe

**ClimateSwipe**, l'application innovante pour une prise de conscience ludique du changement climatique.

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/ofachati/ClimateSwipe)](https://github.com/ofachati/ClimateSwipe/releases/latest)
[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/ofachati/ClimateSwipe)](https://github.com/ofachati/ClimateSwipe/tags)
[![CircleCI](https://img.shields.io/circleci/build/github/ofachati/ClimateSwipe/main)](https://dl.circleci.com/status-badge/redirect/gh/ofachati/ClimateSwipe/tree/main)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/ofachati/ClimateSwipe)](https://codeclimate.com/github/ofachati/ClimateSwipe/maintainability)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/d87436632bff4f2ab2bb25c95c763886)](https://app.codacy.com/gh/ofachati/ClimateSwipe/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![GitHub License](https://img.shields.io/github/license/ofachati/climateswipe)](https://github.com/ofachati/ClimateSwipe/blob/main/LICENSE)

</div>

## À propos de ClimateSwipe

ClimateSwipe est une plateforme interactive visant à éduquer de façon ludique sur le changement climatique, démystifiant les enjeux environnementaux et promouvant des solutions durables grâce à un système de swipe intuitif et des données vérifiées.

ClimateSwipe engage les utilisateurs avec une expérience de "swiping" pour explorer des affirmations sur le changement climatique, distinguant le vrai du faux et offrant des réponses instantanées pour un apprentissage divertissant et instructif.

## Construit avec

Technologies utilisées pour le développement de ClimateSwipe :

- **Frontend** : Angular pour son architecture modulaire et sa réutilisabilité des composants.
  
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- **Backend** : FastAPI pour sa performance et Python pour sa lisibilité et facilité de développement.

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
- **Base de données** : MongoDB pour sa flexibilité dans la gestion des données non structurées.

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
- **Hébergement d'applications** : Heroku pour sa simplicité de déploiement et gestion des ressources.

![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
- **CI/CD** : 

![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)

## Manuel d'installation et d'utilisation

Pour lancer ClimateSwipe, suivez ces étapes simples :

### Frontend

```bash


git clone https://github.com/ofachati/ClimateSwipe
cd ClimateSwipe
npm install
ng serve
```

### Backend

Clonez le [projet Backend](https://github.com/ofachati/ClimateSwipeAPI) et suivez les instructions pour démarrer le serveur FastAPI.

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

Ouvrez `http://localhost:4200/` pour accéder au frontend Angular et `http://localhost:8000/` pour le backend FastAPI.

## Contributions

Nous encourageons la contribution à notre projet ! Voici comment :

1. Fork le projet
2. Créez votre Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0), offrant liberté d'utilisation et de distribution.

## Auteurs
- [Omar EL FACHATI](https://github.com/ofachati)
- [Mohamed KONATE](https://github.com/MohamedKonate)


