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
  selector: 'app-adhd',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './adhd.component.html',
  styleUrls: ['./adhd.component.scss']
})
export class ADHDComponent implements OnInit {
  constructor(
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.seoService.updateSeoTags(this.seoService.getPageSeoData('adhd'));

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Conditions', url: '/conditions' },
        { name: 'ADHD Treatment', url: '/adhd' }
      ]),
      this.seoService.getMedicalConditionSchema({
        name: 'ADHD',
        description: 'Attention-Deficit/Hyperactivity Disorder (ADHD) affects attention, impulse control, and activity levels.',
        symptoms: ['Difficulty focusing', 'Hyperactivity', 'Impulsivity', 'Time management issues', 'Emotional dysregulation'],
        treatments: ['Medication management', 'Behavioral therapy', 'Cognitive training', 'Lifestyle modifications']
      })
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }

  symptoms: Symptom[] = [
    {
      title: 'Difficulty Focusing',
      description: 'Trouble maintaining attention, easily distracted, difficulty organizing thoughts or tasks'
    },
    {
      title: 'Hyperactivity',
      description: 'Restlessness, fidgeting, difficulty sitting still, constant motion or activity'
    },
    {
      title: 'Impulsivity',
      description: 'Acting without thinking, interrupting others, difficulty waiting turns, hasty decisions'
    },
    {
      title: 'Time Management Issues',
      description: 'Chronic lateness, difficulty estimating how long tasks take, poor planning'
    },
    {
      title: 'Low Self-Esteem',
      description: 'Struggling with feelings of inadequacy, shame, or self-doubt related to ADHD symptoms'
    },
    {
      title: 'Relationship Challenges',
      description: 'Difficulty with social interactions, communication issues, and maintaining relationships'
    },
    {
      title: 'Poor Performance at School or Work',
      description: 'Underperforming relative to abilities, difficulty completing projects or tasks'
    },
    {
      title: 'Emotional Dysregulation',
      description: 'Mood swings, quick temper, intense emotional reactions to situations'
    }
  ];
}
