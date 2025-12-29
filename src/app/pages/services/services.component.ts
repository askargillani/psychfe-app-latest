import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { CtaComponent } from '../../components/cta/cta.component';

interface Service {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  icon: string;
}

interface Condition {
  id: string;
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Our Services - Teletherapy & Medication Management | Circle Psychiatry');
    this.meta.updateTag({ name: 'description', content: 'Comprehensive mental health services including teletherapy, medication management, stress management, and specialized care for anxiety, depression, ADHD, and more.' });
    this.meta.updateTag({ name: 'keywords', content: 'teletherapy services, medication management, mental health treatment, online therapy, psychiatric services, stress management' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Our Services - Teletherapy & Medication Management | Circle Psychiatry' });
    this.meta.updateTag({ property: 'og:description', content: 'Comprehensive mental health services including teletherapy, medication management, and specialized care.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://circlepsychiatry.com/services' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: 'Our Services - Teletherapy & Medication Management | Circle Psychiatry' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Comprehensive mental health services including teletherapy, medication management, and specialized care.' });
  }

  services: Service[] = [
    {
      id: 'medication-management',
      name: 'Medication Management',
      description: 'Expert guidance in finding the right medication approach for you. We work closely to ensure your treatment supports your wellness and quality of life.',
      benefits: [
        'Careful consideration of the right medication for your situation',
        'Regular check-ins to ensure the medication is working well for you',
        'Thoughtful management of any side effects',
        'Ongoing adjustments to optimize your care and comfort'
      ],
      icon: '💊'
    },
        {
      id: 'therapy',
      name: 'Therapy',
      description: 'Evidence-based talk therapy to help you process emotions, develop coping strategies, and improve your mental well-being. Work with our compassionate therapists in a safe, confidential space.',
      benefits: [
        'Individual therapy tailored to your specific needs and goals',
        'Development of healthy coping mechanisms and life skills',
        'Safe space to explore and process difficult emotions and experiences',
        'Continuous support on your journey toward improved mental health'
      ],
      icon: '🗣️'
    },
    {
      id: 'telehealth-services',
      name: 'Telehealth Services',
      description: 'High-quality psychiatric care from the comfort and privacy of your home. Same compassionate care, just more convenient.',
      benefits: [
        'Secure video appointments from anywhere that feels safe to you',
        'No travel time—care that fits your schedule and life',
        'The same level of care and attention as in-person visits',
        'Greater accessibility and flexibility for your wellness'
      ],
      icon: '💻'
    }
  ];

  conditions: Condition[] = [
    {
      id: 'depression',
      name: 'Depression',
      description: 'Compassionate care for managing persistent sadness and hopelessness.',
      icon: '😔'
    },
    {
      id: 'anxiety',
      name: 'Anxiety Disorders',
      description: 'Evidence-based treatment for anxiety, panic, and worry-related conditions.',
      icon: '😰'
    },
    {
      id: 'bipolar',
      name: 'Bipolar Disorder',
      description: 'Specialized treatment for mood regulation and stability.',
      icon: '🔄'
    }
  ];
}
