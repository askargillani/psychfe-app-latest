import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { CtaComponent } from '../../components/cta/cta.component';

interface Resource {
  title: string;
  description: string;
  icon: string;
}

interface Symptom {
  title: string;
  description: string;
}

@Component({
  selector: 'app-depression',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './depression.component.html',
  styleUrls: ['./depression.component.scss']
})
export class DepressionComponent implements OnInit {
  constructor(
    private seoService: SeoService
  ) {}

  ngOnInit() {
    // SEO keywords targeted:
    // "inpatient depression treatment", "magnetic therapy for depression",
    // "shock therapy for depression", "mood disorders"
    this.seoService.updateSeoTags({
      title: 'Depression Treatment | Mood Disorders, Magnetic & Inpatient Care | Circle Psychiatry',
      description: 'Expert depression treatment at Circle Psychiatry. We treat mood disorders with personalized care including medication management, therapy, and referrals for magnetic therapy or inpatient depression treatment when needed.',
      keywords: 'depression treatment, inpatient depression treatment, magnetic therapy for depression, shock therapy for depression, mood disorders, major depressive disorder, clinical depression',
      ogType: 'article'
    });

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Conditions', url: '/conditions' },
        { name: 'Depression Treatment', url: '/depression' }
      ]),
      this.seoService.getMedicalConditionSchema({
        name: 'Depression',
        description: 'Major depressive disorder is a mood disorder characterized by persistent sadness and loss of interest in activities.',
        symptoms: ['Persistent sadness', 'Loss of interest', 'Sleep changes', 'Energy fatigue', 'Changes in appetite'],
        treatments: [
          'Psychotherapy',
          'Medication management',
          'Cognitive behavioral therapy',
          'Magnetic therapy (TMS)',
          'Inpatient depression treatment',
          'Lifestyle changes'
        ]
      })
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }

  symptoms: Symptom[] = [
    {
      title: 'Persistent Sadness or Empty Mood',
      description: 'Feeling down, empty, or hopeless most of the day, nearly every day'
    },
    {
      title: 'Loss of Interest in Activities',
      description: 'Losing interest in hobbies, work, socializing, or activities you once enjoyed'
    },
    {
      title: 'Sleep Changes',
      description: 'Sleeping much more or less than usual, or waking very early'
    },
    {
      title: 'Energy Fatigue',
      description: 'Feeling unusually tired, sluggish, or restless almost every day'
    },
    {
      title: 'Changes in Appetite',
      description: 'Eating much more or less than usual, with significant weight changes'
    },
    {
      title: 'Difficulty Concentrating',
      description: 'Having trouble focusing, making decisions, or remembering things'
    },
    {
      title: 'Feelings of Worthlessness',
      description: 'Feeling excessive guilt or worthlessness, or self-blame for things not your fault'
    },
    {
      title: 'Thoughts of Death or Suicide',
      description: 'Thinking about death or suicide, or having a suicide plan'
    }
  ];

  resources: Resource[] = [
    {
      title: 'Evidence-Based Treatment',
      // SEO: "mood disorders" naturally fits the treatment scope description
      description: 'We use proven therapies and medication management for depression and related mood disorders, tailored to your specific needs and goals.',
      icon: '🎯'
    },
    {
      title: 'Compassionate Care',
      description: 'Our providers understand depression and approach treatment with empathy and genuine care.',
      icon: '❤️'
    },
    {
      title: 'Personalized Plans',
      // SEO: "inpatient depression treatment" — referenced as a care-level option
      description: 'Every treatment plan is customized to your unique situation. When a higher level of support is needed, we coordinate referrals for inpatient depression treatment.',
      icon: '👤'
    },
    {
      title: 'Advanced Treatment Options',
      // SEO: "magnetic therapy for depression" and "shock therapy for depression"
      description: 'For treatment-resistant cases, we discuss all options — including magnetic therapy for depression (TMS) and electroconvulsive therapy — so you can make informed decisions about your care.',
      icon: '🤝'
    }
  ];
}