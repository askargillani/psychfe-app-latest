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
  selector: 'app-stress-management',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './stress-management.component.html',
  styleUrls: ['./stress-management.component.scss']
})
export class StressManagementComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeoTags(this.seoService.getPageSeoData('stress-management'));

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Conditions', url: '/conditions' },
        { name: 'Stress Management', url: '/stress-management' }
      ])
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }
  symptoms: Symptom[] = [
    {
      title: 'Acute Stress',
      description: 'Short-term stress response to immediate, time-limited events or challenges'
    },
    {
      title: 'Chronic Stress',
      description: 'Ongoing, long-term stress from persistent life challenges or difficult situations'
    },
    {
      title: 'Stress Eating',
      description: 'Changes in eating habits in response to stress, often emotional eating or loss of appetite'
    },
    {
      title: 'Stress Headaches',
      description: 'Tension headaches or migraines triggered or worsened by stress'
    },
    {
      title: 'Physical Tension',
      description: 'Muscle tension, particularly in neck, shoulders, and back'
    },
    {
      title: 'Sleep Disruption',
      description: 'Difficulty falling asleep or staying asleep due to stress and racing thoughts'
    },
    {
      title: 'Mood Changes',
      description: 'Irritability, anxiety, or depressed mood related to stress'
    },
    {
      title: 'Cognitive Impact',
      description: 'Difficulty concentrating, memory problems, and reduced productivity'
    }
  ];
}
