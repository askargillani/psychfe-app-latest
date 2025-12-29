import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {}
