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
  selector: 'app-eating-disorders',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './eating-disorders.component.html',
  styleUrls: ['./eating-disorders.component.scss']
})
export class EatingDisordersComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    // No direct report keywords for this page.
    // Natural page keywords (visible content where they fit, meta otherwise):
    // "eating disorder treatment" — primary, direct page topic (meta + any natural HTML fit)
    // "anorexia treatment" / "binge eating disorder" — specific condition keywords (meta only)
    // Report keywords included in meta only (already primary on other pages):
    // "inpatient depression treatment" — eating disorders co-occur with depression, inpatient care relevant
    // "mood disorders" — eating disorders are strongly linked with mood disorders
    this.seoService.updateSeoTags({
      title: 'Eating Disorder Treatment | Anorexia, Bulimia & Binge Eating | Circle Psychiatry',
      description: 'Compassionate eating disorder treatment at Circle Psychiatry. We treat anorexia, bulimia, and binge eating disorder with evidence-based care — including support for co-occurring mood disorders and depression.',
      keywords: 'eating disorder treatment, anorexia treatment, binge eating disorder, bulimia treatment, mood disorders, inpatient depression treatment, eating disorder recovery',
      ogType: 'article'
    });

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Conditions', url: '/conditions' },
        { name: 'Eating Disorders', url: '/eating-disorders' }
      ]),
      this.seoService.getMedicalConditionSchema({
        name: 'Eating Disorders',
        description: 'Eating disorders involve severe disturbances in eating behaviors and related thoughts and emotions, including anorexia, bulimia, and binge eating disorder.',
        symptoms: this.symptoms.map(s => s.title),
        treatments: [
          'Eating disorder treatment',
          'Cognitive Behavioral Therapy',
          'Nutritional Counseling',
          'Medication Management',
          'Family-Based Therapy',
          'Group Therapy',
          'Co-occurring mood disorder treatment',
          'Inpatient depression treatment coordination'
        ]
      })
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }

  symptoms: Symptom[] = [
    {
      title: 'Severe Dietary Restriction',
      description: 'Eating significantly less than needed, often combined with excessive exercise'
    },
    {
      title: 'Binge Eating',
      description: 'Consuming large quantities of food in a short time, often feeling out of control'
    },
    {
      title: 'Purging Behaviors',
      description: 'Intentional vomiting, misuse of laxatives, or other compensatory behaviors'
    },
    {
      title: 'Obsessive Food Thoughts',
      description: 'Constant preoccupation with food, calories, weight, and body image'
    },
    {
      title: 'Significant Weight Changes',
      description: 'Rapid weight loss or gain, or extreme fluctuations in weight'
    },
    {
      title: 'Physical Health Issues',
      description: 'Nutritional deficiencies, hormonal imbalances, and damage to body systems'
    },
    {
      title: 'Emotional and Mental Health Impact',
      description: 'Depression, anxiety, low self-esteem, and distorted body image'
    },
    {
      title: 'Social Withdrawal',
      description: 'Avoiding social situations involving food or isolating due to shame'
    }
  ];
}