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
  selector: 'app-panic-attacks',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './panic-attacks.component.html',
  styleUrls: ['./panic-attacks.component.scss']
})
export class PanicAttacksComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    // SEO keywords targeted:
    // "panic attack treatment center" — 25k traffic potential, Easy (visible content)
    // "silent panic attacks" — 1000+ searches, Easy (visible content)
    // "exposure therapy for anxiety" — meta/schema only (primary on /anxiety, no cannibalization)
    // "therapy for anxiety" — meta/schema only (same reason)
    this.seoService.updateSeoTags({
      title: 'Panic Attack Treatment Center | Silent Panic Attacks | Circle Psychiatry',
      description: 'Circle Psychiatry is a trusted panic attack treatment center. We treat panic disorder, silent panic attacks, and anxiety — with evidence-based care including exposure therapy, CBT, and medication management.',
      keywords: 'panic attack treatment center, silent panic attacks, panic disorder, exposure therapy for anxiety, therapy for anxiety, panic attack symptoms, panic attack help',
      ogType: 'article'
    });

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Conditions', url: '/conditions' },
        { name: 'Panic Attacks', url: '/panic-attacks' }
      ]),
      this.seoService.getMedicalConditionSchema({
        name: 'Panic Disorder',
        description: 'Panic disorder involves recurrent, unexpected panic attacks — including silent panic attacks — characterized by sudden intense fear and physical symptoms such as racing heart, sweating, and shortness of breath.',
        symptoms: this.symptoms.map(s => s.title),
        treatments: [
          'Panic attack treatment center care',
          'Cognitive Behavioral Therapy',
          'Exposure therapy for anxiety',
          'Panic-Focused Psychodynamic Therapy',
          'Medication Management',
          'Relaxation Techniques'
        ]
      })
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }

  symptoms: Symptom[] = [
    {
      title: 'Sudden Intense Fear',
      description: 'Abrupt wave of terror or intense dread without a clear or immediate threat'
    },
    {
      title: 'Heart Racing',
      description: 'Rapid, pounding heartbeat that may feel irregular or out of control'
    },
    {
      title: 'Sweating',
      description: 'Profuse sweating, often starting suddenly without physical activity'
    },
    {
      title: 'Chest Pain or Discomfort',
      description: 'Pain, pressure, or tightness in the chest that may resemble a heart attack'
    },
    {
      title: 'Shortness of Breath',
      description: 'Feeling unable to breathe or get enough air, or feeling smothered'
    },
    {
      title: 'Dizziness or Lightheadedness',
      description: 'Feeling faint, dizzy, or unsteady during the attack'
    },
    {
      title: 'Fear of Dying',
      description: 'Intense belief that something terrible is happening or that you might die'
    },
    {
      // SEO: "silent panic attacks" — a real clinical variation, naturally fits as its own symptom
      title: 'Silent Panic Attacks',
      description: 'Silent panic attacks involve intense internal dread, dissociation, or a sense of unreality — without the visible outward symptoms like shaking or hyperventilating, making them harder to recognize but equally distressing'
    }
  ];
}