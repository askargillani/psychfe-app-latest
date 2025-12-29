import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Contact Us - Get Mental Health Support | Circle Psychiatry');
    this.meta.updateTag({ name: 'description', content: 'Contact Circle Psychiatry for compassionate mental health care. Reach out to discuss teletherapy, medication management, or schedule an appointment with our expert providers.' });
    this.meta.updateTag({ name: 'keywords', content: 'contact mental health, schedule therapy appointment, teletherapy consultation, mental health inquiry' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Contact Us - Get Mental Health Support | Circle Psychiatry' });
    this.meta.updateTag({ property: 'og:description', content: 'Contact Circle Psychiatry for compassionate mental health care and schedule an appointment.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://circlepsychiatry.com/contact' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: 'Contact Us - Get Mental Health Support | Circle Psychiatry' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Contact Circle Psychiatry for compassionate mental health care and schedule an appointment.' });
  }

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  submitted = false;

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      // In a real app, you'd send this to a backend
      console.log('Form submitted:', this.formData);
      this.submitted = true;
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
    this.submitted = false;
  }
}
