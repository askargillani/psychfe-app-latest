import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent {
  @Input() heading: string = 'Ready to Get Started?';
  @Input() description: string = 'If you\'re struggling with any of these conditions, you\'re not alone. Our compassionate team is here to help you find the right path to wellness and recovery.';
  @Input() primaryButtonText: string = 'Book an Appointment';
  @Input() primaryButtonUrl: string = 'https://www.zocdoc.com/practice/circle-psychiatry-group-95646?lock=true&isNewPatient=false&referrerType=widget&LocIdent=233810';
  @Input() secondaryButtonText: string = 'Contact Us';
  @Input() secondaryButtonRoute: string = '/contact';
  @Input() isExternalLink: boolean = true;
}
