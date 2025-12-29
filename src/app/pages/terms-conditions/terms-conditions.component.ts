import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent {}
