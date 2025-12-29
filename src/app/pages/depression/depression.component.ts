import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
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
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Depression Treatment - Professional Mental Health Care | Circle Psychiatry');
    this.meta.updateTag({ name: 'description', content: 'Expert depression treatment combining therapy and medication management. Get help for persistent sadness, loss of interest, and depressive symptoms with compassionate support.' });
    this.meta.updateTag({ name: 'keywords', content: 'depression treatment, major depressive disorder, depression therapy, antidepressant medication, mood disorder treatment, clinical depression help' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Depression Treatment - Professional Mental Health Care | Circle Psychiatry' });
    this.meta.updateTag({ property: 'og:description', content: 'Expert depression treatment combining therapy and medication management with compassionate providers.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://circlepsychiatry.com/depression' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: 'Depression Treatment - Professional Mental Health Care | Circle Psychiatry' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Expert depression treatment combining therapy and medication management with compassionate providers.' });
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
