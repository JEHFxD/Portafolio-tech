import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    // TUS PROYECTOS REALES AQUÍ
    // Ejemplo:
     {
       id: 1,
       title: 'Landing Page CultivaMarket',
       description: 'Landing page moderna para una plataforma de compra y venta de productos agrícolas. Desarrollada con enfoque en accesibilidad, velocidad y una interfaz clara que conecta productores y compradores mediante información precisa, secciones dinámicas y un diseño visual inspirado en el entorno rural y la tecnología.',
       image: 'assets/images/LP.jpeg',
       technologies: ['JavaScript', 'CSS', 'HTML'],
       githubUrl: 'https://github.com/JEHFxD/CMLP',
       liveUrl: 'https://jehfxd.github.io/CMLP/#contacto',
       featured: true,
       difficulty: 'Intermedio',
       year: 2026
     }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  getProjectsByTech(technology: string): Project[] {
    return this.projects.filter(p => 
      p.technologies.some(tech => 
        tech.toLowerCase().includes(technology.toLowerCase())
      )
    );
  }
}