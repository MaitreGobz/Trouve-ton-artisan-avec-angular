// création d'un modèle métier, pour réutiliser le modèle dans tout le projet.

export interface Artisan {
    id: number;
    name: string;
    specialty: string;
    note: number;
    location: string;
    about: string;
    email: string;
    website: string;
    category: string;
    top: boolean;
}

