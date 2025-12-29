import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
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
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Secure Teletherapy Services - Online Mental Health Care | Circle Psychiatry');
    this.meta.updateTag({ name: 'description', content: 'Access professional mental health care from home through secure teletherapy. Connect with experienced psychiatric nurse practitioners via private video sessions.' });
    this.meta.updateTag({ name: 'keywords', content: 'teletherapy, online therapy, virtual mental health, remote psychiatric care, video counseling, telehealth mental health' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Secure Teletherapy Services - Online Mental Health Care | Circle Psychiatry' });
    this.meta.updateTag({ property: 'og:description', content: 'Access professional mental health care from home through secure teletherapy with experienced providers.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://circlepsychiatry.com/telehealth' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: 'Secure Teletherapy Services - Online Mental Health Care | Circle Psychiatry' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Access professional mental health care from home through secure teletherapy with experienced providers.' });
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
