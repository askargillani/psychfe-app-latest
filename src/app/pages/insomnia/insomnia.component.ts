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
  selector: 'app-insomnia',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './insomnia.component.html',
  styleUrls: ['./insomnia.component.scss']
})
export class InsomniaComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    // SEO keywords targeted:
    // "insomnia treatment online" (100+ searches, Easy — from report, visible content)
    // "telehealth urgent care" (meta/schema only — primary on homepage, no cannibalization)
    this.seoService.updateSeoTags({
      title: 'Insomnia Treatment Online & In Person | Circle Psychiatry',
      description: 'Get expert insomnia treatment online or in person at Circle Psychiatry. We treat chronic and short-term insomnia with CBT-I, medication management, and telehealth urgent care — same-week appointments available.',
      keywords: 'insomnia treatment online, insomnia treatment, sleep disorders, telehealth urgent care, CBT-I, sleep therapy, chronic insomnia',
      ogType: 'article'
    });

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Conditions', url: '/conditions' },
        { name: 'Insomnia', url: '/insomnia' }
      ]),
      this.seoService.getMedicalConditionSchema({
        name: 'Insomnia',
        description: 'Insomnia is a sleep disorder characterized by difficulty falling asleep, staying asleep, or waking too early, resulting in daytime fatigue and impairment.',
        symptoms: this.symptoms.map(s => s.title),
        treatments: [
          'Insomnia treatment online (telehealth)',
          'Cognitive Behavioral Therapy for Insomnia (CBT-I)',
          'Sleep Hygiene Education',
          'Medication Management',
          'Telehealth urgent care visits',
          'Relaxation Techniques',
          'Stimulus Control'
        ]
      })
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }

  symptoms: Symptom[] = [
    {
      title: 'Difficulty Falling Asleep',
      description: 'Taking a long time to fall asleep despite feeling tired'
    },
    {
      title: 'Frequent Awakenings',
      description: 'Waking up multiple times during the night and having trouble getting back to sleep'
    },
    {
      title: 'Waking Too Early',
      description: 'Waking up earlier than desired and being unable to fall back asleep'
    },
    {
      title: 'Daytime Fatigue',
      description: 'Feeling excessively tired, sleepy, or exhausted during the day'
    },
    {
      title: 'Difficulty Concentrating',
      description: 'Problems with focus, memory, and mental performance due to sleep deprivation'
    },
    {
      title: 'Mood Disturbances',
      description: 'Irritability, anxiety, or depression related to poor sleep'
    },
    {
      title: 'Reduced Performance',
      description: 'Decreased productivity at work or school due to lack of sleep'
    },
    {
      title: 'Health Impacts',
      description: 'Increased risk of health problems including hypertension, heart disease, and diabetes'
    }
  ];
}