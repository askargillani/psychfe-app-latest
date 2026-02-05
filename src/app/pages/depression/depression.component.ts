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
    this.seoService.updateSeoTags(this.seoService.getPageSeoData('depression'));

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Conditions', url: '/conditions' },
        { name: 'Depression Treatment', url: '/depression' }
      ]),
      this.seoService.getMedicalConditionSchema({
        name: 'Depression',
        description: 'Major depressive disorder is characterized by persistent sadness and loss of interest in activities.',
        symptoms: ['Persistent sadness', 'Loss of interest', 'Sleep changes', 'Energy fatigue', 'Changes in appetite'],
        treatments: ['Psychotherapy', 'Medication management', 'Cognitive behavioral therapy', 'Lifestyle changes']
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
      description: 'We use proven therapies and medication management tailored to your specific needs and goals',
      icon: '🎯'
    },
    {
      title: 'Compassionate Care',
      description: 'Our providers understand depression and approach treatment with empathy and genuine care',
      icon: '❤️'
    },
    {
      title: 'Personalized Plans',
      description: 'Every treatment plan is customized to your unique situation, preferences, and values',
      icon: '👤'
    },
    {
      title: 'Ongoing Support',
      description: 'We\'re here for the long term, adjusting treatment as you progress and celebrating your wins',
      icon: '🤝'
    }
  ];
}
