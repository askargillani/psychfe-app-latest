import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { CtaComponent } from '../../components/cta/cta.component';

interface Symptom {
  title: string;
  description: string;
}

interface Resource {
  title: string;
  description: string;
}

@Component({
  selector: 'app-bipolar',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './bipolar.component.html',
  styleUrls: ['./bipolar.component.scss']
})
export class BipolarComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Bipolar Disorder Treatment - Mood Stabilization Care | Circle Psychiatry');
    this.meta.updateTag({ name: 'description', content: 'Comprehensive bipolar disorder treatment combining medication management and therapy. Expert care for mood swings, mania, and depressive episodes with compassionate support.' });
    this.meta.updateTag({ name: 'keywords', content: 'bipolar disorder treatment, bipolar therapy, mood stabilization, mania treatment, bipolar depression, mood disorder care' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Bipolar Disorder Treatment - Mood Stabilization Care | Circle Psychiatry' });
    this.meta.updateTag({ property: 'og:description', content: 'Comprehensive bipolar disorder treatment combining medication management and therapy for mood stabilization.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://circlepsychiatry.com/bipolar' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: 'Bipolar Disorder Treatment - Mood Stabilization Care | Circle Psychiatry' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Comprehensive bipolar disorder treatment combining medication management and therapy for mood stabilization.' });
  }

  maniaSymptons: Symptom[] = [
    {
      title: 'Extreme Happiness or Euphoria',
      description: 'Unusually elevated mood that feels abnormal and out of proportion'
    },
    {
      title: 'Increased Energy and Activity',
      description: 'Feeling energized and needing less sleep than usual'
    },
    {
      title: 'Racing Thoughts',
      description: 'Thoughts moving quickly, making it hard to focus or follow conversations'
    },
    {
      title: 'Rapid Speech',
      description: 'Talking much faster than normal, with rapid word flow'
    },
    {
      title: 'Increased Goal-Directed Activity',
      description: 'Starting many projects or goals with great enthusiasm'
    },
    {
      title: 'Risk-Taking Behavior',
      description: 'Engaging in risky activities without considering consequences'
    },
    {
      title: 'Excessive Irritability',
      description: 'Becoming unusually impatient or irritable when things don\'t go your way'
    },
    {
      title: 'Distractibility',
      description: 'Difficulty maintaining attention; easily distracted by unimportant things'
    }
  ];

  depressionSymptoms: Symptom[] = [
    {
      title: 'Persistent Sadness',
      description: 'Feeling sad, empty, or hopeless most of the day'
    },
    {
      title: 'Loss of Interest',
      description: 'No longer enjoying activities you once loved'
    },
    {
      title: 'Fatigue or Low Energy',
      description: 'Feeling exhausted or sluggish, even after sleeping'
    },
    {
      title: 'Sleep Changes',
      description: 'Sleeping too much or too little, or waking very early'
    },
    {
      title: 'Changes in Appetite',
      description: 'Eating significantly more or less than usual'
    },
    {
      title: 'Difficulty Concentrating',
      description: 'Having trouble focusing, making decisions, or remembering things'
    },
    {
      title: 'Feelings of Worthlessness',
      description: 'Excessive guilt or feeling like a burden to others'
    },
    {
      title: 'Thoughts of Death or Suicide',
      description: 'Thinking about death or having suicidal thoughts'
    }
  ];

  resources: Resource[] = [
    {
      title: 'Evidence-Based Treatment',
      description: 'We use proven medications and therapies specifically designed for bipolar disorder management'
    },
    {
      title: 'Mood Stabilization',
      description: 'Expert monitoring and adjustment of treatment to help stabilize your mood swings'
    },
    {
      title: 'Comprehensive Support',
      description: 'Combining medication management with therapy and lifestyle strategies for stability'
    },
    {
      title: 'Long-Term Partnership',
      description: 'We\'re here to support your ongoing wellness and help you thrive despite bipolar disorder'
    }
  ];
}
