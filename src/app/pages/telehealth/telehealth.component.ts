import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { CtaComponent } from '../../components/cta/cta.component';

interface TelehealthProvider {
  name: string;
  credentials: string;
  image: string;
  teleheathLink: string;
}

@Component({
  selector: 'app-telehealth',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  templateUrl: './telehealth.component.html',
  styleUrls: ['./telehealth.component.scss']
})
export class TelehealthComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateSeoTags(this.seoService.getPageSeoData('telehealth'));

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Telehealth', url: '/telehealth' }
      ])
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }

  providers: TelehealthProvider[] = [
    {
      name: 'Mary Sturgis',
      credentials: 'PMHNP-BC',
      image: '/MARY-STURGIS.jpg',
      teleheathLink: 'https://circlepsych.doxy.me/marysturgis'
    },
    {
      name: 'Autumn Knox',
      credentials: 'PMHNP-BC',
      image: '/Autumn-knox.jpg',
      teleheathLink: 'https://circlepsych.doxy.me/autumnknox'
    },
    {
      name: 'Alex Theisen',
      credentials: 'LPCC',
      image: '/alex-thiesen.jpg',
      teleheathLink: 'https://circlepsych.doxy.me/alex'
    },
    {
      name: 'Paul Folk',
      credentials: 'PMHNP-BC',
      image: '/Paul-Folk.jpg',
      teleheathLink: 'https://circlepsych.doxy.me/paulfolk'
    },
    {
      name: 'Lauren Hood',
      credentials: 'PMHNP-BC',
      image: '/Lauren-Hood.jpg',
      teleheathLink: 'https://circlepsych.doxy.me/laurenhood'
    },
    {
      name: 'Dean Gainey',
      credentials: 'DNP, PMHNP-BC',
      image: '/Dean-Gainey.jpg',
      teleheathLink: 'https://circlepsych.doxy.me/deangainey'
    }
  ];
}
