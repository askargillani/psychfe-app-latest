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
  selector: 'app-mood-disorders',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './mood-disorders.component.html',
  styleUrls: ['./mood-disorders.component.scss']
})
export class MoodDisordersComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    // SEO keywords targeted:
    // "mood disorders" — core page topic, signals topical authority
    // "mood stabilizers" — high-intent keyword, patients researching treatment land here
    // "bipolar disorder test" — secondary reference (primary on /bipolar), fits as mood disorders include bipolar
    // "magnetic therapy for depression" / "shock therapy for depression" — meta/schema only,
    //   already used on /depression page so kept out of visible content here to avoid duplication
    this.seoService.updateSeoTags({
      title: 'Mood Disorders Treatment & Mood Stabilizers | Circle Psychiatry',
      description: 'Expert mood disorders treatment at Circle Psychiatry. We offer mood stabilizers, therapy, and comprehensive care for depression, bipolar disorder, and related conditions — including evaluation for a bipolar disorder test.',
      keywords: 'mood disorders, mood stabilizers, bipolar disorder test, magnetic therapy for depression, shock therapy for depression, depression treatment, bipolar disorder treatment',
      ogType: 'article'
    });

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Conditions', url: '/conditions' },
        { name: 'Mood Disorders', url: '/mood-disorders' }
      ]),
      this.seoService.getMedicalConditionSchema({
        name: 'Mood Disorders',
        description: 'Mood disorders involve persistent disturbances in mood that affect daily functioning, including major depression, bipolar disorder, and persistent depressive disorder.',
        symptoms: this.symptoms.map(s => s.title),
        treatments: [
          'Mood stabilizers',
          'Cognitive Behavioral Therapy',
          'Medication Management',
          'Interpersonal Therapy',
          'Magnetic therapy for depression (TMS)',
          'Electroconvulsive therapy (shock therapy for depression)',
          'Bipolar disorder evaluation and testing',
          'Psychoeducation'
        ]
      })
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }

  symptoms: Symptom[] = [
    {
      title: 'Persistent Sadness',
      description: 'Feeling constantly sad, empty, or hopeless with little variation throughout the day'
    },
    {
      title: 'Extreme Mood Swings',
      description: 'Dramatic shifts between intense happiness and deep sadness or irritability'
    },
    {
      title: 'Loss of Interest',
      description: 'Losing pleasure in activities you once enjoyed, hobbies, or social interactions'
    },
    {
      title: 'Energy Changes',
      description: 'Experiencing extreme fatigue or unusual bursts of energy and hyperactivity'
    },
    {
      title: 'Sleep Disturbances',
      description: 'Changes in sleep patterns including insomnia, oversleeping, or waking very early'
    },
    {
      title: 'Changes in Appetite',
      description: 'Significant changes in eating habits and weight fluctuations'
    },
    {
      title: 'Difficulty Concentrating',
      description: 'Problems focusing, making decisions, or remembering important information'
    },
    {
      title: 'Functional Impairment',
      description: 'Difficulty managing work, school, relationships, or daily responsibilities'
    }
  ];
}