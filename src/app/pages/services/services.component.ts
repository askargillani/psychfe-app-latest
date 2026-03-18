import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { CtaComponent } from '../../components/cta/cta.component';

interface Service {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  icon: string;
}

interface Condition {
  id: string;
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  constructor(
    private seoService: SeoService
  ) {}

  ngOnInit() {
    // SEO keywords targeted: "family psychiatry care", "inpatient psychiatry care", "insomnia treatment online"
    this.seoService.updateSeoTags({
      title: 'Services | Family Psychiatry Care & Insomnia Treatment Online | Circle Psychiatry',
      description: 'Circle Psychiatry offers family psychiatry care, insomnia treatment online, medication management, therapy, and telehealth services. Inpatient psychiatry care coordination also available.',
      keywords: 'family psychiatry care, insomnia treatment online, inpatient psychiatry care, medication management, telehealth psychiatry, mental health services',
      ogType: 'website'
    });

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' }
      ])
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }

  services: Service[] = [
    {
      id: 'medication-management',
      name: 'Medication Management',
      // SEO: "inpatient psychiatry care" — referenced as care coordination context
      description: 'Expert guidance in finding the right medication approach for you. Whether you are stepping down from psychiatry care or starting treatment for the first time, we work closely with you to ensure your plan supports your wellness and quality of life.',
      benefits: [
        'Careful consideration of the right medication for your situation',
        'Regular check-ins to ensure the medication is working well for you',
        'Thoughtful management of any side effects',
        'Ongoing adjustments to optimize your care and comfort'
      ],
      icon: '💊'
    },
    {
      id: 'therapy',
      name: 'Therapy',
      // SEO: "family psychiatry care" — therapy is the most natural home for this keyword
      description: 'Evidence-based talk therapy for individuals and families. Our family psychiatry care approach means we support not just the individual, but the people around them — helping everyone develop healthier patterns and stronger connections.',
      benefits: [
        'Individual and family therapy tailored to your specific needs and goals',
        'Development of healthy coping mechanisms and life skills',
        'Safe space to explore and process difficult emotions and experiences',
        'Continuous support on your journey toward improved mental health'
      ],
      icon: '🗣️'
    },
    {
      id: 'telehealth-services',
      name: 'Telehealth Services',
      // SEO: "insomnia treatment" — telehealth is the perfect natural fit
      description: 'High-quality psychiatric care from the comfort and privacy of your home. From insomnia treatment to ongoing anxiety and depression management, our telehealth services deliver the same compassionate care as in-person visits — just more convenient.',
      benefits: [
        'Secure video appointments from anywhere that feels safe to you',
        'No travel time — care that fits your schedule and life',
        // SEO: reinforce "insomnia treatment" in benefits
        'Treatment for insomnia, anxiety, depression, ADHD, and more',
        'Greater accessibility and flexibility for your wellness'
      ],
      icon: '💻'
    }
  ];

  conditions: Condition[] = [
    {
      id: 'depression',
      name: 'Depression',
      description: 'Compassionate care for managing persistent sadness and hopelessness.',
      icon: '😔'
    },
    {
      id: 'anxiety',
      name: 'Anxiety Disorders',
      description: 'Evidence-based treatment for anxiety, panic, and worry-related conditions.',
      icon: '😰'
    },
    {
      id: 'bipolar',
      name: 'Bipolar Disorder',
      description: 'Specialized treatment for mood regulation and stability.',
      icon: '🔄'
    }
  ];
}