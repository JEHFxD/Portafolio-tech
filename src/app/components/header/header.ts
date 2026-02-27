import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  menuOpen = false;
  navItems = ['Inicio', 'Habilidades', 'Proyectos', 'Contacto'];
  currentTime = new Date();

  constructor() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(section: string) {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.menuOpen = false;
    }
  }
}