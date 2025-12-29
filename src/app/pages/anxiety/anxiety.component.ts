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
  selector: 'app-anxiety',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './anxiety.component.html',
  styleUrls: ['./anxiety.component.scss']
})
export class AnxietyComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Anxiety Disorder Treatment - Expert Care & Support | Circle Psychiatry');
    this.meta.updateTag({ name: 'description', content: 'Professional anxiety disorder treatment through teletherapy and medication management. Get help for excessive worry, panic attacks, and anxiety symptoms with compassionate care.' });
    this.meta.updateTag({ name: 'keywords', content: 'anxiety treatment, anxiety disorder therapy, panic attack help, GAD treatment, social anxiety, anxiety medication management' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Anxiety Disorder Treatment - Expert Care & Support | Circle Psychiatry' });
    this.meta.updateTag({ property: 'og:description', content: 'Professional anxiety disorder treatment through teletherapy and medication management with compassionate providers.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://circlepsychiatry.com/anxiety' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: 'Anxiety Disorder Treatment - Expert Care & Support | Circle Psychiatry' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Professional anxiety disorder treatment through teletherapy and medication management with compassionate providers.' });
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
