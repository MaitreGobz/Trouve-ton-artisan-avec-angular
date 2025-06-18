# TrouveTonArtisanAngular

Une Single-Page Application (SPA) générée en utilisant [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9 standalone, couplée à **Bootstrap 5.2.3** et SASS, pour rechercher et mettre en valeur les artisans de la région Auvergne–Rhône-Alpes.

## Prérequis

- **Node.js** ≥ 20
- **npm** (ou **yarn**)
- **Angular CLI** pour `ng serve`, `ng build`, etc.

## Installation

1. **Cloner le dépôt**

   ```bash
    git clone https://github.com/MaitreGobz/Trouve-ton-artisan-avec-angular
    cd nom-du-dossier
   ```

2. **Configurer vos clés**

Dans **src/app/environments/environment.ts**, renseignez vos IDs EmailJS et reCAPTCHA :

    ```bash
    export const environment = {
        production: false,
        emailJs: {
            serviceId: 'VOTRE_SERVICE_ID_EMAILJS',
            templateId: 'VOTRE_TEMPLATE_ID_EMAILJS',
            userId: 'VOTRE_USER_ID_EMAILJS'
        },
        recaptcha: {
        siteKey: 'VOTRE_RECAPTCHA_SITE_KEY'
        }
    };
    ```

3. **Vérifier le base href**

Dans src/index.html :

```bash
<base href="/">
```

## Développement

Démarrez le serveur local :

```bash
ng serve --open
```

Ouvre automatiquement http://localhost:4200

L’application se recharge à chaque modification de code sauvegardé.

## Génération de code

Angular CLI inclut des outils de scaffolding puissants :

Pour générer un composant :

```bash
ng generate component nom-du-composant
```

Pour voir toutes les options disponibles :

```bash
ng generate --help
```

## Build de production

Compile et optimise pour la prod :

```bash
ng build --configuration production
```

Cela compilera votre projet et stockera les artefacts de build dans le répertoire **dist/**. Par défaut, la build de production optimise les performances et la vitesse de votre application.

## Test unitaire

Exécution avec [Karma](https://karma-runner.github.io) (par défaut) :

```bash
ng test
```

## Tests end-to-end (E2E)

Pour les tests E2E :

```bash
ng e2e
```

Angular CLI n'est pas fourni avec un framework de test complet par défaut. Vous pouvez choisir celui qui correspond à vos besoins.

## Fonctionnalités clés

- Standalone Components en Angular 19.2.13
- Bootstrap 5.2.3 pour la grille, utilitaires et responsive
- Recherche par nom, localité, spécialité (pipe personnalisé)
- Notation étoilée sur 5, avec remplissage partiel de la dernière étoile
- Top 3 Artisans : carousel mobile et grille desktop
- Fiche détail artisan avec URL SEO-friendly (ID + slug)
- Formulaire de contact intégré : EmailJS + Google reCAPTCHA v2
- Accessibilité : W3C, WCAG, ARIA roles & labels
- SASS pour styles modulaires et overrides Bootstrap

## Hébergement

Ce projet est hébergé par alwaydata à l'adresse suivante : [https://maitregobz.github.io/Trouve-ton-artisan-avec-angular/](https://maitregobz.github.io/Trouve-ton-artisan-avec-angular/)

## Ressources supplémentaires

Pour plus d'informations sur l'utilisation de l'Angular CLI, y compris des références de commandes détaillées, visitez la page [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
