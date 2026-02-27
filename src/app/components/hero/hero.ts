import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit {
  typedText = '';
  fullText = 'Desarrollador Frontend y QA Tester';
  technologies = ['JavaScript', 'React', 'Angular', 'Node.js'];
  currentTech = 0;
  showCursor = true;

  ngOnInit() {
    this.typeWriter();
    this.rotateTechnologies();
    setInterval(() => {
      this.showCursor = !this.showCursor;
    }, 500);
  }

  typeWriter() {
    let i = 0;
    const typing = setInterval(() => {
      if (i < this.fullText.length) {
        this.typedText += this.fullText.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
  }

  rotateTechnologies() {
    setInterval(() => {
      this.currentTech = (this.currentTech + 1) % this.technologies.length;
    }, 2000);
  }

  scrollToProjects() {
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
  }
}