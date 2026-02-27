export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  difficulty?: 'Principiante' | 'Intermedio' | 'Avanzado';
  year?: number;
}