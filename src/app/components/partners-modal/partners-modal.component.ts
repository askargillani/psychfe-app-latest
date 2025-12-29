import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Partner {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-partners-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners-modal.component.html',
  styleUrls: ['./partners-modal.component.scss']
})
export class PartnersModalComponent implements OnChanges {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  private scrollPosition = 0;

  partners: Partner[] = [
    { name: 'Anthem', logo: '/anthem.png' },
    { name: 'Carelon', logo: '/carelon.png' },
    { name: 'Aetna', logo: '/aetna.png' },
    { name: 'BlueCross BlueShield', logo: '/bluecross.png' },
    { name: 'Medicare', logo: '/medicare.png' },
    { name: 'United Healthcare', logo: '/united-healthcare.png' },
    { name: 'TriWest Healthcare Alliance', logo: '/triwest.png' },
    { name: 'UMR', logo: '/umr.png' },
    { name: 'CHAMPVA', logo: '/champva.png' },
    { name: 'Northeast Health Partners', logo: '/northeast.png' },
    { name: 'Optum', logo: '/optum.png' },
    { name: 'Aetna Medicare Solutions', logo: '/aetna-medicare.png' },
    { name: 'Health First Colorado', logo: '/health-first.png' },
    { name: 'CHP+', logo: '/chp+.png' },
    { name: 'AARP Medicare Plans', logo: '/aarp.png' },
    { name: 'Colorado Access', logo: '/colarado-access.png' },
    { name: 'Kaiser Permanente', logo: '/kaiser.png' },
    { name: 'Cigna Healthcare', logo: 'https://a.storyblok.com/f/329013/161x100/7524f093e1/cigna-logo-1.webp' },
    { name: 'Cigna EverNorth', logo: '/cigna-evernorth.png' },
    { name: 'Cigna HealthSpring', logo: '/cigna-healthspring.png' },
    { name: 'Rocky Mountain Health Plans', logo: '/rocky-mountain.png' },
    { name: 'TriCare', logo: '/tri-care.png' },
    { name: 'Colorado Community Health Alliance', logo: '/colarado-community.png' },
    { name: 'United Healthcare Community Plan', logo: '/united-healthcare-community.png' }
  ];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      if (this.isOpen) {
        // Save current scroll position
        this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        // Prevent body scroll when modal opens
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
      } else {
        // Restore body scroll when modal closes
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';

        // Restore scroll position
        window.scrollTo(0, this.scrollPosition);
      }
    }
  }

  onClose() {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
