import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateSeoTags(this.seoService.getPageSeoData('contact'));

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' }
      ])
    ];
    this.seoService.addMultipleStructuredData(schemas);
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
