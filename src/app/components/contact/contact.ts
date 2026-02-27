import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  phoneNumber = '3113689136';
  email = 'hincapiefernandezjoan123@gmail.com';
  copied: string | null = null;

  copyToClipboard(text: string, type: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copied = type;
      setTimeout(() => {
        this.copied = null;
      }, 2000);
    });
  }

  openGithub() {
    window.open('https://github.com/JEHFxD', '_blank');
  }

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/joan-esteban-hincapi%C3%A9-fernandez-b9398b22a/', '_blank');
  }
}