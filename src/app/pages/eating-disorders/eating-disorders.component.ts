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
    this.seoService.updateSeoTags(this.seoService.getPageSeoData('eating-disorders'));

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
        treatments: ['Cognitive Behavioral Therapy', 'Nutritional Counseling', 'Medication Management', 'Family-Based Therapy', 'Group Therapy']
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
