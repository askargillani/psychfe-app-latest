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
  selector: 'app-anxiety',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './anxiety.component.html',
  styleUrls: ['./anxiety.component.scss']
})
export class AnxietyComponent implements OnInit {
  constructor(
    private seoService: SeoService
  ) {}

  ngOnInit() {
    // Update SEO tags
    this.seoService.updateSeoTags(this.seoService.getPageSeoData('anxiety'));

    // Add structured data
    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Conditions', url: '/conditions' },
        { name: 'Anxiety Treatment', url: '/anxiety' }
      ]),
      this.seoService.getMedicalConditionSchema({
        name: 'Anxiety Disorder',
        description: 'Anxiety disorders involve excessive worry, fear, or nervousness that interferes with daily life.',
        symptoms: ['Excessive worry', 'Physical symptoms', 'Sleep disturbances', 'Panic attacks', 'Avoidance behaviors'],
        treatments: ['Teletherapy', 'Medication management', 'Cognitive behavioral therapy', 'Stress management']
      })
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }

  symptoms: Symptom[] = [
    {
      title: 'Excessive Worry',
      description: 'Persistent, uncontrollable worry about everyday situations that interferes with daily activities'
    },
    {
      title: 'Physical Symptoms',
      description: 'Trembling, sweating, rapid heartbeat, shortness of breath, or muscle tension'
    },
    {
      title: 'Sleep Disturbances',
      description: 'Difficulty falling asleep or staying asleep due to racing thoughts or worry'
    },
    {
      title: 'Panic Attacks',
      description: 'Sudden intense episodes of fear accompanied by physical symptoms like chest pain or dizziness'
    },
    {
      title: 'Avoidance Behaviors',
      description: 'Avoiding situations or activities that trigger anxiety, limiting your quality of life'
    },
    {
      title: 'Difficulty Concentrating',
      description: 'Problems focusing at work or school due to intrusive anxious thoughts'
    },
    {
      title: 'Irritability',
      description: 'Feeling on edge, irritable, or quick to anger as a result of constant tension'
    },
    {
      title: 'Restlessness',
      description: 'Feeling constantly keyed up, unable to relax, or feeling like something bad will happen'
    }
  ];
}
