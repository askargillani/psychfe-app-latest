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
  selector: 'app-med-management',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './med-management.component.html',
  styleUrls: ['./med-management.component.scss']
})
export class MedManagementComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateSeoTags(this.seoService.getPageSeoData('med-management'));

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Medication Management', url: '/med-management' }
      ])
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }

  symptoms: Symptom[] = [
    {
      title: 'Initial Evaluation',
      description: 'Comprehensive assessment of your medical and psychiatric history to determine medication needs'
    },
    {
      title: 'Prescription Management',
      description: 'Expert guidance on selecting appropriate medications tailored to your specific condition'
    },
    {
      title: 'Side Effect Monitoring',
      description: 'Regular follow-up to assess effectiveness and manage any potential side effects'
    },
    {
      title: 'Medication Adjustments',
      description: 'Fine-tuning dosages and making changes to optimize your treatment response'
    },
    {
      title: 'Drug Interaction Review',
      description: 'Thorough review of all medications to ensure safe combinations and avoid harmful interactions'
    },
    {
      title: 'Ongoing Safety Monitoring',
      description: 'Continuous oversight of your medication treatment to ensure safety and efficacy'
    },
    {
      title: 'Collaborative Care',
      description: 'Working with you and your other healthcare providers to coordinate comprehensive care'
    },
    {
      title: 'Treatment Optimization',
      description: 'Regular evaluation and adjustment to help you achieve the best possible outcomes'
    }
  ];
}
