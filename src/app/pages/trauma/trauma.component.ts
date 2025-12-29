import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
export class TraumaComponent {
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
