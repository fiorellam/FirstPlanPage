import { SafeResourceUrl } from '@angular/platform-browser';

export interface CareerViewModel {
    id: string;
    autor: string;
    color: string;
    descripcion: string;
    imagen: string;
    nombre: string;
    texto: string;
    videoUrl: SafeResourceUrl;
}
