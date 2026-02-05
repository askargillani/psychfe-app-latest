import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { CtaComponent } from '../../components/cta/cta.component';

interface Symptom {
  title: string;
  description: string;
}

@Component({
  selector: 'app-inclusive-therapy',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './inclusive-therapy.component.html',
  styleUrls: ['./inclusive-therapy.component.scss']
})
export class InclusiveTherapyComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeoTags(this.seoService.getPageSeoData('inclusive-therapy'));

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Conditions', url: '/conditions' },
        { name: 'Inclusive Therapy', url: '/inclusive-therapy' }
      ])
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }
  symptoms: Symptom[] = [
    {
      title: 'Cultural Competence',
      description: 'Understanding and respecting diverse cultural backgrounds and their influence on mental health'
    },
    {
      title: 'Equity and Access',
      description: 'Ensuring all individuals have equal access to quality care regardless of background'
    },
    {
      title: 'Identity Affirmation',
      description: 'Affirming and validating all aspects of identity including gender, sexual orientation, and ethnicity'
    },
    {
      title: 'Safe Space',
      description: 'Creating an environment where you feel completely safe to be your authentic self'
    },
    {
      title: 'Trauma-Informed Care',
      description: 'Recognizing how past trauma intersects with identity and cultural context'
    },
    {
      title: 'Inclusive Language',
      description: 'Using language that respects pronouns, identities, and cultural preferences'
    },
    {
      title: 'Accessibility',
      description: 'Ensuring physical, sensory, and cognitive accessibility for all individuals'
    },
    {
      title: 'Community Connection',
      description: 'Connecting you with community resources and support networks that understand your experience'
    }
  ];
}
