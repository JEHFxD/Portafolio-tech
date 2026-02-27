import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {
  skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'JavaScript', level: 70, icon: '⚡', color: '#f7df1e' },
        { name: 'HTML5', level: 75, icon: '🌐', color: '#e34c26' },
        { name: 'CSS3', level: 70, icon: '🎨', color: '#264de4' },
        { name: 'React', level: 80, icon: '⚛️', color: '#61dafb' },
        { name: 'Angular', level: 50, icon: '🅰️', color: '#dd0031' }
      ]
    },
    {
      category: 'Testing & Tools',
      items: [
        { name: 'Cypress', level: 75, icon: '🧪', color: '#17202c' },
        { name: 'Git', level: 85, icon: '📦', color: '#f05032' },
        { name: 'React Native', level: 80, icon: '📱', color: '#61dafb' }
      ]
    }
  ];
}