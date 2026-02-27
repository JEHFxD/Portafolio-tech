import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- NECESARIO
import { Project } from '../../models/project';
import { ProjectsService } from '../../services/projects';

@Component({
  selector: 'app-projects',
  standalone: true, // <-- IMPRESCINDIBLE
  imports: [CommonModule], // <-- PARA *ngIf y *ngFor
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  hoveredProject: number | null = null;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }

  getTechColor(tech: string): string {
    const colors: {[key: string]: string} = {
      'JavaScript': '#f7df1e',
      'React': '#61dafb',
      'Angular': '#dd0031',
      'React Native': '#61dafb',
      'HTML': '#e34c26',
      'CSS': '#264de4',
      'Cypress': '#17202c',
      'TypeScript': '#3178c6',
      'Node.js': '#68a063'
    };
    return colors[tech] || '#3b82f6';
  }
}