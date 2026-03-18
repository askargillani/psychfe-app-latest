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
    // No strong report keywords fit this page for visible content.
    // Meta tags updated with closest report keyword matches:
    // "therapy for anxiety" — stress and anxiety are clinically linked
    // "exposure therapy for anxiety" — relevant as a treatment approach for stress-related conditions
    // "psychiatric care" / "mental health doctor" — seed keywords from report
    this.seoService.updateSeoTags({
      title: 'Stress Management & Relief | Circle Psychiatry',
      description: 'Expert stress management care at Circle Psychiatry. Our mental health doctors provide psychiatric care and therapy for anxiety, stress, and related conditions — helping you build resilience and improve quality of life.',
      keywords: 'stress management, therapy for anxiety, exposure therapy for anxiety, psychiatric care, mental health doctor, stress relief, chronic stress',
      ogType: 'website'
    });

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
      // SEO: "chronic stress treatment" referenced naturally in the card most relevant to it
      description: 'Ongoing, long-term stress from persistent life challenges — chronic stress treatment is available and effective when these patterns begin affecting your health and daily functioning'
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