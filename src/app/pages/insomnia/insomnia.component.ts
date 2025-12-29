import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
export class InsomniaComponent {
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
