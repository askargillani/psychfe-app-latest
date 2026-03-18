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
    // SEO keywords targeted:
    // "exposure therapy for anxiety" (2.4k traffic potential, Medium)
    // "silent panic attacks" (1000+ searches, Easy)
    // "therapy for anxiety" (seed keyword from report)
    this.seoService.updateSeoTags({
      title: 'Therapy for Anxiety | Exposure Therapy & Silent Panic Attacks | Circle Psychiatry',
      description: 'Expert therapy for anxiety disorders including exposure therapy, panic attacks, and silent panic attacks. Circle Psychiatry provides evidence-based, personalized anxiety treatment in person and online.',
      keywords: 'therapy for anxiety, exposure therapy for anxiety, silent panic attacks, anxiety treatment, panic disorder, generalized anxiety disorder, social anxiety',
      ogType: 'article'
    });

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
        symptoms: ['Excessive worry', 'Physical symptoms', 'Sleep disturbances', 'Panic attacks', 'Silent panic attacks', 'Avoidance behaviors'],
        treatments: [
          'Therapy for anxiety',
          'Exposure therapy for anxiety',
          'Medication management',
          'Cognitive behavioral therapy',
          'Stress management',
          'Telehealth visits'
        ]
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
      // SEO keyword: "silent panic attacks" — a real clinical variation many patients search for
      title: 'Silent Panic Attacks',
      description: 'Silent panic attacks cause intense internal fear and distress without obvious outward signs — no shaking or hyperventilating, but overwhelming dread, dizziness, or a sense of unreality'
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