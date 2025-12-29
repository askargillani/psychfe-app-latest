import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-accessibility',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss']
})
export class AccessibilityComponent {}
