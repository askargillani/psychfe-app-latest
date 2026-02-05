import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { CtaComponent } from '../../components/cta/cta.component';

interface TeamMember {
  name: string;
  title: string;
  tags: string[];
  content: string;
  appointmentLink: string;
  image: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.seoService.updateSeoTags(this.seoService.getPageSeoData('about'));

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' }
      ])
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }

  teamMembers: TeamMember[] = [
    {
      name: 'Mary Sturgis',
      title: 'PMHNP-BC',
      tags: ['PMHNP-BC', 'Medication Management', 'Telehealth Only'],
      appointmentLink: 'https://www.zocdoc.com/doctor/mary-sturgis-pmhnp-np-542834?lock=true&isNewPatient=false&referrerType=widget',
      image: '/MARY-STURGIS.jpg',
      content: 'As a PMHNP, Mary provides holistic, person-centered care integrating evidence-based practices like CBT, motivational interviewing, and medication management. She believes in a whole-person approach that includes lifestyle habits like nutrition, physical activity, and mindfulness. In sessions, you can expect a safe space to develop personalized, goal-oriented care plans with compassionate support.'
    },
    {
      name: 'Autumn Knox',
      title: 'PMHNP-BC',
      tags: ['PMHNP-BC', 'Medication Management', 'Telehealth & In-Person'],
      appointmentLink: 'https://schedule.yosicare.com/7c82ae039c4e51c6b2c0daf04ce78ca6',
      image: '/Autumn-knox.jpg',
      content: 'As a board-certified PMHNP with degrees from UTEP and Purdue Global, Autumn brings a unique perspective as a nurse, mother, and combat veteran. She offers comprehensive psychiatric evaluations, diagnostic services, and medication management. Her holistic approach addresses not only symptoms but also emotional, physical, and environmental factors to promote lasting mental wellness.'
    },
    {
      name: 'Lauren Hood',
      title: 'PMHNP-BC',
      tags: ['PMHNP-BC', 'Medication Management', 'Telehealth only'],
      appointmentLink: 'https://schedule.yosicare.com/faee039397a48922a359feb806b1c7e5',
      image: '/Lauren-Hood.jpg',
      content: 'Lauren is a dedicated PMHNP-BC with extensive experience in psychiatric emergency services, addiction treatment, and inpatient mental health throughout Colorado. She specializes in treating ADHD, anxiety, depression, and mood disorders using evidence-based approaches. Her philosophy focuses on meeting clients where they are and empowering them to take an active role in their treatment.'
    },
    {
      name: 'Paul Folk',
      title: 'PMHNP-BC',
      tags: ['PMHNP-BC', 'Medication Management', 'Telehealth only'],
      appointmentLink: 'https://schedule.yosicare.com/6809000c0a3cdaca1abec50bd4087647',
      image: '/Paul-Folk.jpg',
      content: 'Paul is a board-certified PMHNP specializing in ADHD, PTSD, addiction, mood disorders, anxiety, and depression across all age groups. His patient-centered approach integrates therapy, medication management, and holistic strategies. Committed to mental health advocacy and breaking down barriers to care, Paul creates a safe, welcoming environment where patients feel heard and empowered.'
    },
    {
      name: 'Dean Gainey',
      title: 'DNP, PMHNP-BC',
      tags: ['DNP', 'PMHNP-BC', 'Medication Management', 'Telehealth & In-Person'],
      appointmentLink: 'https://circlepsych.intakeq.com/booking?practitionerId=6579e9e8ae7af64212cfd9da',
      image: '/Dean-Gainey.jpg',
      content: 'Dr. Dean Gainey is a board-certified Psychiatric Nurse Practitioner with a DNP from Michigan State University and significant experience as a Psychiatric Nurse in the U.S. Army. He specializes in treating ADHD, anxiety, depression, and PTSD across all ages. His integrative, patient-centered approach emphasizes therapeutic relationships and is tailored to each patient\'s unique needs for effective, long-term recovery.'
    },
    {
      name: 'Alex Theisen',
      title: 'LPCC',
      tags: ['LPCC', 'Therapy', 'Telehealth only'],
      appointmentLink: 'https://schedule.yosicare.com/db3804653a5bc310315e6f9da42b3b32',
      image: '/alex-thiesen.jpg',
      content: 'As a Licensed Professional Clinical Counselor Candidate, Alex provides culturally-sensitive therapy with curiosity, collaboration, and empowerment. Life\'s challenges often require new perspectives and solutions. Together, you\'ll gain clarity and confidence in who you are, drawing upon your identity, relationships, emotions, and unique strengths to create meaningful change.'
    }
  ];
}
