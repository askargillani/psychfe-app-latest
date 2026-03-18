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
  selector: 'app-trauma',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './trauma.component.html',
  styleUrls: ['./trauma.component.scss']
})
export class TraumaComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    // SEO keywords targeted:
    // "trauma and ptsd treatment centers" (100+ searches, 1.3k traffic potential, Easy) — from report
    // "trauma treatment center colorado" (100+ searches, 120 traffic potential, Easy) — local keyword
    this.seoService.updateSeoTags({
      title: 'Trauma & PTSD Treatment Center Colorado | Circle Psychiatry',
      description: 'Circle Psychiatry is a leading trauma and PTSD treatment center in Colorado. Compassionate, evidence-based care for PTSD, trauma recovery, and complex trauma — in person and via telehealth.',
      keywords: 'trauma and ptsd treatment centers, trauma treatment center colorado, PTSD treatment, trauma therapy, EMDR, complex trauma, trauma recovery colorado',
      ogType: 'article'
    });

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Conditions', url: '/conditions' },
        { name: 'Trauma/PTSD', url: '/trauma' }
      ]),
      this.seoService.getMedicalConditionSchema({
        name: 'Post-Traumatic Stress Disorder (PTSD)',
        description: 'PTSD is a mental health condition triggered by experiencing or witnessing a traumatic event, characterized by flashbacks, nightmares, severe anxiety, and uncontrollable thoughts.',
        symptoms: this.symptoms.map(s => s.title),
        treatments: [
          'Cognitive Behavioral Therapy',
          'EMDR Therapy',
          'Exposure Therapy',
          'Medication Management',
          'Group Therapy',
          'Trauma and PTSD treatment center care (Colorado)'
        ]
      })
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }

  symptoms: Symptom[] = [
    {
      title: 'Flashbacks',
      description: 'Involuntary, intense re-experiencing of the traumatic event as if it\'s happening now'
    },
    {
      title: 'Nightmares',
      description: 'Disturbing dreams related to the trauma that disrupt sleep and cause distress'
    },
    {
      title: 'Severe Anxiety',
      description: 'Intense, persistent fear or panic that may be triggered by reminders of the trauma'
    },
    {
      title: 'Uncontrollable Thoughts',
      description: 'Intrusive, unwanted thoughts about the traumatic event that are difficult to control'
    },
    {
      title: 'Avoidance Behaviors',
      description: 'Avoiding people, places, or activities that remind you of the trauma'
    },
    {
      title: 'Emotional Numbness',
      description: 'Difficulty feeling emotions, disconnection from others, or feeling detached from life'
    },
    {
      title: 'Hypervigilance',
      description: 'Constantly being on alert, easily startled, or overly aware of perceived threats'
    },
    {
      title: 'Functional Impairment',
      description: 'Difficulty managing work, school, relationships, or daily activities due to symptoms'
    }
  ];
}