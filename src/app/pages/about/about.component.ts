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
  phone?: string;
  newPatientLink?: string;
  returningPatientLink?: string;
  newPatientTelehealth?: string;
  newPatientInPerson?: string;
  returningPatientTelehealth?: string;
  returningPatientInPerson?: string;
  bookingPage?: string; // Add bookingPage to the interface
  bioExpanded?: boolean;
  credential?: string; // Add credential to the interface
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

  activeFilter: 'all' | 'prescribers' | 'therapists' = 'all';
  openDropdown: string | null = null;

  toggleDropdown(key: string) {
    this.openDropdown = this.openDropdown === key ? null : key;
  }

  isDropdownOpen(key: string): boolean {
    return this.openDropdown === key;
  }

  get filteredMembers(): TeamMember[] {
    if (this.activeFilter === 'prescribers') return this.prescribers;
    if (this.activeFilter === 'therapists') return this.therapists;
    return [...this.prescribers, ...this.therapists];
  }

  setFilter(filter: 'all' | 'prescribers' | 'therapists') {
    this.activeFilter = filter;
  }

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

  toggleBio(member: any): void {
    member.bioExpanded = !member.bioExpanded;
  }

  prescribers: TeamMember[] = [
    {
      name: 'Mary Sturgis',
      title: 'PMHNP-BC',
      tags: ['Medication Management'],
      appointmentLink: 'https://www.zocdoc.com/doctor/mary-sturgis-pmhnp-np-542834?lock=true&isNewPatient=false&referrerType=widget',
      image: '/MARY-STURGIS.jpg',
      content: 'As a PMHNP, Mary provides holistic, person-centered care integrating evidence-based practices like CBT, motivational interviewing, and medication management. She believes in a whole-person approach that includes lifestyle habits like nutrition, physical activity, and mindfulness. In sessions, you can expect a safe space to develop personalized, goal-oriented care plans with compassionate support.'
    },
    {
      name: 'Autumn Knox',
      title: 'PMHNP-BC',
      tags: ['Medication Management'],
      appointmentLink: 'https://schedule.yosicare.com/7c82ae039c4e51c6b2c0daf04ce78ca6',
      image: '/Autumn-knox.jpg',
      content: 'As a board-certified PMHNP with degrees from UTEP and Purdue Global, Autumn brings a unique perspective as a nurse, mother, and combat veteran. She offers comprehensive psychiatric evaluations, diagnostic services, and medication management. Her holistic approach addresses not only symptoms but also emotional, physical, and environmental factors to promote lasting mental wellness.'
    },
    {
      name: 'Lauren Hood',
      title: 'PMHNP-BC',
      tags: ['Medication Management'],
      appointmentLink: 'https://schedule.yosicare.com/faee039397a48922a359feb806b1c7e5',
      image: '/Lauren-Hood.jpg',
      content: 'Lauren is a dedicated PMHNP-BC with extensive experience in psychiatric emergency services, addiction treatment, and inpatient mental health throughout Colorado. She specializes in treating ADHD, anxiety, depression, and mood disorders using evidence-based approaches. Her philosophy focuses on meeting clients where they are and empowering them to take an active role in their treatment.'
    },
    {
      name: 'Paul Folk',
      title: 'PMHNP-BC',
      tags: ['Medication Management'],
      appointmentLink: 'https://schedule.yosicare.com/6809000c0a3cdaca1abec50bd4087647',
      image: '/Paul-Folk.jpg',
      content: 'Paul is a board-certified PMHNP specializing in ADHD, PTSD, addiction, mood disorders, anxiety, and depression across all age groups. His patient-centered approach integrates therapy, medication management, and holistic strategies. Committed to mental health advocacy and breaking down barriers to care, Paul creates a safe, welcoming environment where patients feel heard and empowered.'
    },
    {
      name: 'Dean Gainey',
      title: 'DNP, PMHNP-BC',
      tags: ['Medication Management'],
      appointmentLink: '',
      phone: '7192084027',
      image: '/Dean-Gainey.jpg',
      content: 'Dr. Dean Gainey is a board-certified Psychiatric Nurse Practitioner with a DNP from Michigan State University and significant experience as a Psychiatric Nurse in the U.S. Army. He specializes in treating ADHD, anxiety, depression, and PTSD across all ages. His integrative, patient-centered approach emphasizes therapeutic relationships and is tailored to each patient\'s unique needs for effective, long-term recovery.'
    },
    {
      name: 'Natalie Molnar',
      title: 'PA-C',          // <-- this is what team-title displays
      tags: ['Medication Management'],
      appointmentLink: '',
      image: '/Natalie Molnar Headshot.jpg',
      newPatientTelehealth: 'https://www.zocdoc.com/doctor/natalie-molnar-pa-711777?isNewPatient=true&lock=true&referrerType=widget&LocIdent=385165',
      newPatientInPerson: 'https://schedule.yosicare.com/natalie-molnar-new-inperson',
      returningPatientTelehealth: 'https://schedule.yosicare.com/natalie-molnar-returning-telehealth',
      returningPatientInPerson: 'https://schedule.yosicare.com/natalie-molnar-returning-inperson',
      bookingPage: '/natalie-molnar.html', // Add bookingPage to Natalie's member object
      credential: 'PA-C',
      content: 'Natalie is a board-certified Physician Assistant specializing in the evaluation and treatment of ADHD, anxiety disorders, depression, and mood related conditions across the lifespan. She takes a whole-person approach, combining evidence-based psychiatric medication management with practical therapeutic strategies while considering sleep, lifestyle, stress, and daily functioning. Her style is compassionate, structured, and solution-focused, empowering patients to take an active role in their care and supporting long-term stability and growth.'
    }
  ];

  therapists: TeamMember[] = [
    {
      name: 'Alex Theisen',
      title: 'LPCC',
      tags: ['Therapy'],
      appointmentLink: 'https://schedule.yosicare.com/db3804653a5bc310315e6f9da42b3b32',
      image: '/alex-thiesen.jpg',
      content: 'As a Licensed Professional Clinical Counselor Candidate, Alex provides culturally-sensitive therapy with curiosity, collaboration, and empowerment. Life\'s challenges often require new perspectives and solutions. Together, you\'ll gain clarity and confidence in who you are, drawing upon your identity, relationships, emotions, and unique strengths to create meaningful change.'
    },
    {
      name: 'Karen Jensen',
      title: 'M.S., LPC',
      tags: ['Therapy'],
      appointmentLink: 'https://schedule.yosicare.com/40dd1fdcdd0d51e121b9e3a4501f1f6f',
      image: '/Karen-Jensen.png',
      content: 'Karen Jensen, M.S., LPC, is a Licensed Professional Counselor serving Colorado Springs, CO, with a Master\'s degree in Marriage and Family Therapy (MFT). With over 10 years of experience, she specializes in emotionally focused therapy, trauma informed care, and family systems therapy, offering a warm, supportive approach that integrates cognitive, somatic, and relational techniques to help clients heal from past trauma and build stronger, healthier relationships. Clients often share that they feel deeply seen, understood, and supported in a space grounded in trust, emotional safety, and professional expertise.'
    }
  ];
}
