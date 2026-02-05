import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeoTags(this.seoService.getPageSeoData('terms-conditions'));

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Terms & Conditions', url: '/terms-conditions' }
      ])
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }
}
