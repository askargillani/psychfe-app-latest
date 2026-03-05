import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SeoService } from '../../services/seo.service';
import { PartnersModalComponent } from '../../components/partners-modal/partners-modal.component';

interface AuthorityCard {
  icon: SafeHtml;
  title: string;
  description: string;
}

interface Condition {
  name: string;
  description: string;
  route: string;
}

interface Testimonial {
  author: string;
  role: string;
  quote: string;
  rating: number;
  fullReview?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, PartnersModalComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  currentTestimonialIndex = 0;
  carouselInterval: any;
  readonly CAROUSEL_INTERVAL = 5000;
  isCarouselPaused = false;
  touchStartX = 0;
  touchEndX = 0;

  showPartnersModal = false;
  showReviewModal = false;
  selectedReview: Testimonial | null = null;

  authorityCards: AuthorityCard[] = [];

  conditions: Condition[] = [
    {
      name: 'ADHD',
      description: 'Comprehensive evaluation and individualized treatment plans for attention and focus challenges in adults and adolescents.',
      route: '/adhd'
    },
    {
      name: 'Anxiety',
      description: 'Evidence-based treatment for generalized anxiety, social anxiety, panic disorder, and related conditions.',
      route: '/anxiety'
    },
    {
      name: 'Depression',
      description: 'Compassionate care combining medication management and therapeutic support for lasting relief.',
      route: '/depression'
    },
    {
      name: 'Bipolar Disorder',
      description: 'Specialized mood stabilization and ongoing support for bipolar I, II, and cyclothymia.',
      route: '/bipolar'
    },
    {
      name: 'PTSD & Trauma',
      description: 'Trauma-informed psychiatric care to help you process, heal, and reclaim your life.',
      route: '/trauma'
    },
    {
      name: 'Sleep Disorders',
      description: 'Clinical evaluation and treatment for insomnia, sleep disruption, and sleep-related conditions.',
      route: '/insomnia'
    }
  ];

  testimonials: Testimonial[] = [
    {
      author: 'Patient',
      role: 'Verified Patient',
      quote: 'I had an amazing experience with Paul Folk as my psychiatry provider. He made me feel comfortable and heard. His compassionate approach and ability to listen truly set him apart.',
      fullReview: 'I had an amazing experience with Paul Folk as my psychiatry provider. He made me feel comfortable and heard. His compassionate approach and ability to listen truly set him apart. I appreciate his dedication and expertise, which have empowered me to take charge of my health. I highly recommend him to anyone seeking supportive and effective psychiatric care!',
      rating: 5
    },
    {
      author: 'Patient',
      role: 'Verified Patient',
      quote: 'Really loved Ms. Knox — I will be continuing care with her.',
      fullReview: 'Really loved Ms. Knox — I will be continuing care with her.',
      rating: 5
    },
    {
      author: 'Patient',
      role: 'Verified Patient',
      quote: 'Great visit — very attentive, compassionate, and helpful. Excited to be on this ADHD and mental health journey with a competent doc.',
      fullReview: 'Great visit — very attentive, compassionate, and helpful. Excited to be on this ADHD and mental health journey with a competent doc.',
      rating: 5
    },
    {
      author: 'Patient',
      role: 'Verified Patient',
      quote: 'Paul has been incredibly supportive and instrumental in resolving my situation. I truly appreciate all his help.',
      fullReview: 'Paul has been incredibly supportive and instrumental in resolving my situation. I truly appreciate all his help.',
      rating: 5
    },
    {
      author: 'Patient',
      role: 'Verified Patient',
      quote: 'Dr. Grainey was extremely professional and attentive, thoroughly addressing all of my questions and concerns. I highly recommend him.',
      fullReview: 'Dr. Grainey was extremely professional and attentive, thoroughly addressing all of my questions and concerns. I highly recommend him to anyone seeking support for their mental health.',
      rating: 5
    },
    {
      author: 'Patient',
      role: 'Verified Patient',
      quote: 'Autumn is one of the best NPs I have ever met. Great listener, kind and compassionate. Very knowledgeable. Glad I met her.',
      fullReview: 'Autumn is one of the best NPs I have ever met. Great listener, kind and compassionate. Very knowledgeable. Glad I met her.',
      rating: 5
    },
    {
      author: 'Patient',
      role: 'Verified Patient',
      quote: 'Very smart and caring. Understood my needs.',
      fullReview: 'Very smart and caring. Understood my needs.',
      rating: 5
    }
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private seoService: SeoService,
    private el: ElementRef,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.buildAuthorityCards();

    this.seoService.updateSeoTags(this.seoService.getPageSeoData('home'));
    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getWebSiteSchema(),
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        'name': 'Circle Psychiatry',
        'description': 'Evidence-based psychiatric care through medication management and therapy',
        'url': 'https://circlepsychiatry.com',
        'medicalSpecialty': ['Psychiatry', 'Mental Health'],
        'availableService': [
          { '@type': 'MedicalTherapy', 'name': 'Teletherapy' },
          { '@type': 'MedicalProcedure', 'name': 'Medication Management' }
        ]
      }
    ];
    this.seoService.addMultipleStructuredData(schemas);

    this.startCarousel();
    // scroll animations moved to ngAfterViewInit
  }

  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  private buildAuthorityCards() {
    const rawCards = [
      {
        iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
        title: 'Evidence-Based Treatment',
        description: 'Every care plan is grounded in the latest clinical research and proven psychiatric protocols.'
      },
      {
        iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>`,
        title: 'Psychiatric Medication Specialists',
        description: 'Expert prescribers with deep knowledge of psychiatric medications and individualized dosing.'
      },
      {
        iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
        title: 'Fast Appointment Availability',
        description: 'New patient appointments typically available within days, not months.'
      },
      {
        iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"></path></svg>`,
        title: 'Insurance Accepted',
        description: 'We accept most major insurance plans so quality care remains accessible and affordable.'
      },
      {
        iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path></svg>`,
        title: 'Telehealth Available',
        description: 'Secure, HIPAA-compliant video visits from anywhere — no commute necessary.'
      },
      {
        iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`,
        title: 'Personalized Treatment Plans',
        description: 'Your care is tailored to your unique history, goals, and preferences — never one-size-fits-all.'
      }
    ];

    this.authorityCards = rawCards.map(c => ({
      icon: this.sanitizer.bypassSecurityTrustHtml(c.iconSvg),
      title: c.title,
      description: c.description
    }));
  }

  getCarouselOffset(): number {
    const cardWidth = 350;
    const gap = 24;
    const cardWithGap = cardWidth + gap;
    return -this.currentTestimonialIndex * cardWithGap;
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      if (!this.isCarouselPaused) {
        this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
        this.cdr.markForCheck();
      }
    }, this.CAROUSEL_INTERVAL);
  }

  stopCarousel() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  pauseCarousel() {
    this.isCarouselPaused = true;
  }

  resumeCarousel() {
    this.isCarouselPaused = false;
  }

  nextTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
    this.cdr.markForCheck();
    this.stopCarousel();
    this.startCarousel();
  }

  previousTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.cdr.markForCheck();
    this.stopCarousel();
    this.startCarousel();
  }

  goToTestimonial(index: number) {
    this.currentTestimonialIndex = index;
    this.cdr.markForCheck();
    this.stopCarousel();
    this.startCarousel();
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        this.nextTestimonial();
      } else {
        this.previousTestimonial();
      }
    }
  }

  openPartnersModal() {
    this.showPartnersModal = true;
  }

  closePartnersModal() {
    this.showPartnersModal = false;
  }

  openReviewModal(testimonial: Testimonial) {
    this.selectedReview = testimonial;
    this.showReviewModal = true;
    this.stopCarousel();
  }

  closeReviewModal() {
    this.showReviewModal = false;
    this.selectedReview = null;
    this.startCarousel();
  }

  private setupScrollAnimations() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observerOptions = {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, observerOptions);

      const elements = this.el.nativeElement.querySelectorAll(
        '.reveal-section, .authority-card, .condition-card, .step-card, .testimonial-card'
      );
      elements.forEach((el: Element) => observer.observe(el));
    }
  }
}
