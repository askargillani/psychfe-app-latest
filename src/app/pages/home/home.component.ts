import { Component, OnInit, OnDestroy, ChangeDetectorRef, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { CtaComponent } from '../../components/cta/cta.component';
import { PartnersModalComponent } from '../../components/partners-modal/partners-modal.component';

interface Reason {
  title: string;
  description: string;
}

interface Condition {
  id: string;
  name: string;
  description: string;
  icon: string;
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
  imports: [CommonModule, RouterModule, CtaComponent, PartnersModalComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentTestimonialIndex = 0;
  carouselInterval: any;
  readonly CAROUSEL_INTERVAL = 5000; // 5 seconds
  visibleTestimonials = 3; // Number of testimonials visible at once
  showPartnersModal = false;
  showReviewModal = false;
  selectedReview: Testimonial | null = null;

  constructor(
    private cdr: ChangeDetectorRef,
    private meta: Meta,
    private title: Title,
    private el: ElementRef
  ) {}

  whyReasons: Reason[] = [
    {
      title: 'We Truly Listen',
      description: 'You matter. Our providers take genuine time to understand your unique story, your hopes, and what truly matters to you—not just listing symptoms.'
    },
    {
      title: 'Compassionate Expertise',
      description: 'Our experienced team brings both clinical knowledge and heartfelt care. You are a whole person with a complete life, and we treat you that way.'
    },
    {
      title: 'Treatment That Fits Your Life',
      description: 'One size never fits all. We work with you to create a treatment plan that honors your preferences, values, and unique situation.'
    },
    {
      title: 'A Welcoming, Safe Haven',
      description: 'You can be authentically yourself here. In our calm, confidential environment, you\'re never judged—only supported and understood.'
    },
    {
      title: 'Your Partner in Healing',
      description: 'We walk alongside you on your wellness journey. Together we celebrate progress, navigate challenges, and build lasting wellbeing.'
    },
    {
      title: 'Care That Works for You',
      description: 'Whether in-person or online, evening appointments or flexible scheduling—mental health care should fit your life, not the other way around.'
    }
  ];

  conditions: Condition[] = [
    {
      id: 'depression',
      name: 'Depression',
      description: 'Compassionate care for managing persistent sadness and hopelessness.',
      icon: ''
    },
    {
      id: 'bipolar',
      name: 'Bipolar Disorder',
      description: 'Specialized treatment for mood regulation and stability.',
      icon: ''
    },
    {
      id: 'adhd',
      name: 'ADHD',
      description: 'Individualized treatment plans for attention and focus challenges.',
      icon: ''
    }
  ];

  testimonials: Testimonial[] = [
    {
      author: 'Patient',
      role: 'Verified Patient',
      quote: 'I had an amazing experience with Paul Folk as my psychiatry provider. He made me feel comfortable and heard...',
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
      quote: 'Great visit — very attentive, compassionate, and helpful. Excited to be on this ADHD and mental health journey...',
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
      quote: 'Dr. Grainey was extremely professional and attentive, thoroughly addressing all of my questions and concerns...',
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

  getCarouselOffset(): number {
    const cardWidth = 350; // Fixed card width in pixels
    const gap = 24; // Gap between cards ($space-6 = 24px)
    const cardWithGap = cardWidth + gap;
    return -this.currentTestimonialIndex * cardWithGap;
  }

  ngOnInit() {
    this.title.setTitle('Circle Psychiatry - Compassionate Mental Health Care | Teletherapy & Medication Management');
    this.meta.updateTag({ name: 'description', content: 'Expert mental health care with compassionate providers. Specializing in anxiety, depression, ADHD, mood disorders, and more through secure teletherapy and medication management.' });
    this.meta.updateTag({ name: 'keywords', content: 'mental health, teletherapy, medication management, anxiety treatment, depression therapy, ADHD care, psychiatric nurse practitioner, online therapy, mental wellness' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Circle Psychiatry - Compassionate Mental Health Care' });
    this.meta.updateTag({ property: 'og:description', content: 'Expert mental health care with compassionate providers specializing in anxiety, depression, ADHD, and more.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://circlepsychiatry.com/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: 'Circle Psychiatry - Compassionate Mental Health Care' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Expert mental health care with compassionate providers specializing in anxiety, depression, ADHD, and more.' });

    // Structured Data
    this.addStructuredData();

    this.startCarousel();
    this.setupScrollAnimations();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
      this.cdr.markForCheck();
    }, this.CAROUSEL_INTERVAL);
  }

  stopCarousel() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      // Observe all animatable elements
      setTimeout(() => {
        const elements = this.el.nativeElement.querySelectorAll(
          '.hero-text, .hero-image, .section-header, .reason-card, .condition-card, .testimonial-card, .rating-statistics, .partners-content'
        );
        elements.forEach((el: Element) => observer.observe(el));
      }, 100);
    }
  }

  private addStructuredData() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Circle Psychiatry",
      "description": "Compassionate mental health care through teletherapy and medication management",
      "url": "https://circlepsychiatry.com",
      "telephone": "+1-XXX-XXX-XXXX",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "medicalSpecialty": [
        "Psychiatry",
        "Mental Health"
      ],
      "priceRange": "$$",
      "availableService": [
        {
          "@type": "MedicalTherapy",
          "name": "Teletherapy"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Medication Management"
        }
      ]
    });
    document.head.appendChild(script);
  }
}
