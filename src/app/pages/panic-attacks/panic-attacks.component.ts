import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
export class PanicAttacksComponent {
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
      title: 'Duration',
      description: 'Attacks typically last minutes to an hour, though they may feel much longer'
    }
  ];
}
