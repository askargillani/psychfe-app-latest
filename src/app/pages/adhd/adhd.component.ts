import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
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
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('ADHD Treatment - Focus & Attention Support | Circle Psychiatry');
    this.meta.updateTag({ name: 'description', content: 'Comprehensive ADHD treatment for adults and children. Expert care for attention deficit, hyperactivity, and impulsivity through medication management and behavioral strategies.' });
    this.meta.updateTag({ name: 'keywords', content: 'ADHD treatment, ADD therapy, attention deficit disorder, ADHD medication management, adult ADHD, child ADHD, focus problems' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'ADHD Treatment - Focus & Attention Support | Circle Psychiatry' });
    this.meta.updateTag({ property: 'og:description', content: 'Comprehensive ADHD treatment for adults and children with expert medication management and behavioral strategies.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://circlepsychiatry.com/adhd' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: 'ADHD Treatment - Focus & Attention Support | Circle Psychiatry' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Comprehensive ADHD treatment for adults and children with expert medication management and behavioral strategies.' });
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
