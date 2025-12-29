import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { CtaComponent } from '../../components/cta/cta.component';

interface Condition {
  id: string;
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-conditions',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})
export class ConditionsComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Mental Health Conditions We Treat | Circle Psychiatry');
    this.meta.updateTag({ name: 'description', content: 'Expert treatment for anxiety, depression, ADHD, bipolar disorder, PTSD, eating disorders, insomnia, and more. Compassionate, evidence-based mental health care.' });
    this.meta.updateTag({ name: 'keywords', content: 'anxiety treatment, depression therapy, ADHD care, bipolar disorder, PTSD treatment, eating disorders, insomnia help, panic attacks, mood disorders, trauma therapy' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Mental Health Conditions We Treat | Circle Psychiatry' });
    this.meta.updateTag({ property: 'og:description', content: 'Expert treatment for anxiety, depression, ADHD, bipolar disorder, PTSD, and more through compassionate mental health care.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://circlepsychiatry.com/conditions' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: 'Mental Health Conditions We Treat | Circle Psychiatry' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Expert treatment for anxiety, depression, ADHD, bipolar disorder, PTSD, and more through compassionate mental health care.' });
  }

  conditions: Condition[] = [
    {
      id: 'inclusive-therapy',
      name: 'All Inclusive Therapy',
      description: 'Compassionate care that celebrates who you are and validates your unique experience.',
      icon: ''
    },
    {
      id: 'anxiety',
      name: 'Anxiety Disorders',
      description: 'Evidence-based treatment for anxiety, panic, and worry-related conditions.',
      icon: ''
    },
    {
      id: 'adhd',
      name: 'ADHD',
      description: 'Comprehensive support to help you manage attention, hyperactivity, and impulse control.',
      icon: ''
    },
    {
      id: 'trauma',
      name: 'Trauma/PTSD',
      description: 'Specialized treatment for trauma and post-traumatic stress disorder.',
      icon: ''
    },
    {
      id: 'mood-disorders',
      name: 'Mood Disorders',
      description: 'Specialized treatment for mood regulation and managing depression and bipolar disorder.',
      icon: ''
    },
    {
      id: 'med-management',
      name: 'Medication Management',
      description: 'Expert guidance to find the right medication approach for your wellness.',
      icon: ''
    },
    {
      id: 'panic-attacks',
      name: 'Panic Attacks',
      description: 'Effective treatment to help you regain control and overcome panic disorder.',
      icon: ''
    },
    {
      id: 'stress-management',
      name: 'Stress Management',
      description: 'Evidence-based strategies to help you manage stress and build resilience.',
      icon: ''
    },
    {
      id: 'insomnia',
      name: 'Insomnia',
      description: 'Comprehensive sleep disorder treatment to help you sleep better.',
      icon: ''
    },
    {
      id: 'eating-disorders',
      name: 'Eating Disorders',
      description: 'Specialized care for eating disorders and disordered eating patterns.',
      icon: ''
    },
    {
      id: 'addiction',
      name: 'Addiction',
      description: 'Comprehensive treatment for substance and behavioral addictions.',
      icon: ''
    },
    {
      id: 'depression',
      name: 'Depression',
      description: 'Compassionate care for managing persistent sadness and hopelessness.',
      icon: ''
    },
    {
      id: 'bipolar',
      name: 'Bipolar Disorder',
      description: 'Specialized treatment for mood regulation and stability.',
      icon: ''
    }
  ];
}
