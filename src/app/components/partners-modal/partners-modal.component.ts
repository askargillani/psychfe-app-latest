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
    { name: 'Anthem', logo: '/assets/anthem.png' },
    { name: 'Carelon', logo: '/assets/carelon.png' },
    { name: 'Aetna', logo: '/assets/aetna.png' },
    { name: 'BlueCross BlueShield', logo: '/assets/bluecross.png' },
    { name: 'Medicare', logo: '/assets/medicare.png' },
    { name: 'United Healthcare', logo: '/assets/united-healthcare.png' },
    { name: 'TriWest Healthcare Alliance', logo: '/assets/triwest.png' },
    { name: 'UMR', logo: '/assets/umr.png' },
    { name: 'CHAMPVA', logo: '/assets/champva.png' },
    { name: 'Northeast Health Partners', logo: '/assets/northeast.png' },
    { name: 'Optum', logo: '/assets/optum.png' },
    { name: 'Aetna Medicare Solutions', logo: '/assets/aetna-medicare.png' },
    { name: 'Health First Colorado', logo: '/assets/health-first.png' },
    { name: 'CHP+', logo: '/assets/chp+.png' },
    { name: 'AARP Medicare Plans', logo: '/assets/aarp.png' },
    { name: 'Colorado Access', logo: '/assets/colarado-access.png' },
    { name: 'Kaiser Permanente', logo: '/assets/kaiser.png' },
    { name: 'Cigna Healthcare', logo: 'https://a.storyblok.com/f/329013/161x100/7524f093e1/cigna-logo-1.webp' },
    { name: 'Cigna EverNorth', logo: '/assets/cigna-evernorth.png' },
    { name: 'Cigna HealthSpring', logo: '/assets/cigna-healthspring.png' },
    { name: 'Rocky Mountain Health Plans', logo: '/assets/rocky-mountain.png' },
    { name: 'TriCare', logo: '/assets/tri-care.png' },
    { name: 'Colorado Community Health Alliance', logo: '/assets/colarado-community.png' },
    { name: 'United Healthcare Community Plan', logo: '/assets/united-healthcare-community.png' }
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
