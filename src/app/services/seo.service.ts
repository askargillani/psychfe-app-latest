import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';

export interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private defaultImage = 'https://circle-psyche.vercel.app/hero.png';
  private defaultAuthor = 'Circle Psychiatry';
  private baseUrl = 'https://circle-psyche.vercel.app';

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    // Update canonical URL on route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateCanonicalUrl();
      });
  }

  /**
   * Update all SEO meta tags for a page
   */
  updateSeoTags(seoData: SeoData): void {
    // Update page title
    this.title.setTitle(seoData.title);

    // Update meta description
    this.meta.updateTag({ name: 'description', content: seoData.description });

    // Update keywords if provided
    if (seoData.keywords) {
      this.meta.updateTag({ name: 'keywords', content: seoData.keywords });
    }

    // Update author
    this.meta.updateTag({ 
      name: 'author', 
      content: seoData.author || this.defaultAuthor 
    });

    // Update robots tag
    this.meta.updateTag({ 
      name: 'robots', 
      content: seoData.noIndex ? 'noindex, nofollow' : 'index, follow' 
    });

    // Open Graph tags
    const ogUrl = seoData.ogUrl || `${this.baseUrl}${this.router.url}`;
    const ogImage = seoData.ogImage || this.defaultImage;
    const ogType = seoData.ogType || 'website';

    this.meta.updateTag({ property: 'og:title', content: seoData.title });
    this.meta.updateTag({ property: 'og:description', content: seoData.description });
    this.meta.updateTag({ property: 'og:url', content: ogUrl });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ property: 'og:type', content: ogType });
    this.meta.updateTag({ property: 'og:site_name', content: 'Circle Psychiatry' });

    // Twitter Card tags
    const twitterCard = seoData.twitterCard || 'summary_large_image';
    this.meta.updateTag({ name: 'twitter:card', content: twitterCard });
    this.meta.updateTag({ name: 'twitter:title', content: seoData.title });
    this.meta.updateTag({ name: 'twitter:description', content: seoData.description });
    this.meta.updateTag({ name: 'twitter:image', content: ogImage });

    // Article specific tags
    if (seoData.publishedTime) {
      this.meta.updateTag({ property: 'article:published_time', content: seoData.publishedTime });
    }
    if (seoData.modifiedTime) {
      this.meta.updateTag({ property: 'article:modified_time', content: seoData.modifiedTime });
    }

    // Update canonical URL
    if (seoData.canonicalUrl) {
      this.updateCanonicalUrl(seoData.canonicalUrl);
    } else {
      this.updateCanonicalUrl();
    }
  }

  /**
   * Update canonical URL
   */
  private updateCanonicalUrl(url?: string): void {
    const canonicalUrl = url || `${this.baseUrl}${this.router.url.split('?')[0]}`;
    
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    
    if (link) {
      link.setAttribute('href', canonicalUrl);
    } else {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalUrl);
      this.document.head.appendChild(link);
    }
  }

  /**
   * Add structured data (JSON-LD) to the page
   */
  addStructuredData(data: any): void {
    // Remove existing structured data
    const existingScripts = this.document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add new structured data
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }

  /**
   * Add multiple structured data schemas
   */
  addMultipleStructuredData(dataArray: any[]): void {
    // Remove existing structured data
    const existingScripts = this.document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add each structured data schema
    dataArray.forEach(data => {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(data);
      this.document.head.appendChild(script);
    });
  }

  /**
   * Generate Organization structured data
   */
  getOrganizationSchema(): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'MedicalOrganization',
      'name': 'Circle Psychiatry',
      'url': this.baseUrl,
      'logo': `${this.baseUrl}/logo.png`,
      'description': 'Expert mental health care through teletherapy and medication management',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'US'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'customer service',
        'availableLanguage': ['English']
      },
      'sameAs': [
        // Add social media URLs here when available
      ]
    };
  }

  /**
   * Generate WebSite structured data
   */
  getWebSiteSchema(): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Circle Psychiatry',
      'url': this.baseUrl,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${this.baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
  }

  /**
   * Generate Medical Condition structured data
   */
  getMedicalConditionSchema(condition: { name: string; description: string; symptoms?: string[]; treatments?: string[] }): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      'name': condition.name,
      'description': condition.description,
      'signOrSymptom': condition.symptoms?.map(symptom => ({
        '@type': 'MedicalSymptom',
        'name': symptom
      })),
      'possibleTreatment': condition.treatments?.map(treatment => ({
        '@type': 'MedicalTherapy',
        'name': treatment
      }))
    };
  }

  /**
   * Generate Breadcrumb structured data
   */
  getBreadcrumbSchema(items: { name: string; url: string }[]): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': `${this.baseUrl}${item.url}`
      }))
    };
  }

  /**
   * Generate FAQ structured data
   */
  getFaqSchema(faqs: { question: string; answer: string }[]): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };
  }

  /**
   * Generate Article/BlogPosting structured data
   */
  getArticleSchema(article: { 
    title: string; 
    description: string; 
    image?: string; 
    datePublished: string; 
    dateModified?: string;
    author?: string;
  }): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': article.title,
      'description': article.description,
      'image': article.image || this.defaultImage,
      'datePublished': article.datePublished,
      'dateModified': article.dateModified || article.datePublished,
      'author': {
        '@type': 'Organization',
        'name': article.author || this.defaultAuthor
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Circle Psychiatry',
        'logo': {
          '@type': 'ImageObject',
          'url': `${this.baseUrl}/logo.png`
        }
      }
    };
  }

  /**
   * Get SEO data for specific pages
   */
  getPageSeoData(pageName: string): SeoData {
    const seoDataMap: { [key: string]: SeoData } = {
      'home': {
        title: 'Circle Psychiatry - Mental Health Care & Teletherapy',
        description: 'Compassionate mental health care through teletherapy. Expert treatment for anxiety, depression, ADHD, and more.',
        keywords: 'mental health, teletherapy, psychiatry, anxiety treatment, depression help, ADHD therapy',
        ogType: 'website'
      },
      'about': {
        title: 'About Us - Circle Psychiatry',
        description: 'Learn about our mission to provide compassionate, evidence-based mental health care to our community.',
        keywords: 'about circle psychiatry, mental health team, psychiatric care, our mission',
        ogType: 'website'
      },
      'services': {
        title: 'Our Services - Circle Psychiatry',
        description: 'Comprehensive mental health services including teletherapy, medication management, and specialized treatments.',
        keywords: 'mental health services, teletherapy services, medication management, psychiatric treatment',
        ogType: 'website'
      },
      'contact': {
        title: 'Contact Us - Circle Psychiatry',
        description: 'Get in touch with Circle Psychiatry. Book an appointment or reach out with questions.',
        keywords: 'contact psychiatrist, book appointment, mental health consultation',
        ogType: 'website'
      },
      'anxiety': {
        title: 'Anxiety Treatment - Circle Psychiatry',
        description: 'Expert anxiety treatment through therapy and medication management. Find relief from anxiety disorders.',
        keywords: 'anxiety treatment, anxiety therapy, generalized anxiety disorder, panic disorder, social anxiety',
        ogType: 'article'
      },
      'depression': {
        title: 'Depression Treatment - Circle Psychiatry',
        description: 'Professional depression treatment combining therapy and medication. Get support for major depressive disorder.',
        keywords: 'depression treatment, depression therapy, major depressive disorder, mood disorders',
        ogType: 'article'
      },
      'adhd': {
        title: 'ADHD Treatment - Circle Psychiatry',
        description: 'Comprehensive ADHD treatment for adults. Expert diagnosis and medication management.',
        keywords: 'ADHD treatment, adult ADHD, ADHD medication management, attention deficit disorder',
        ogType: 'article'
      },
      'bipolar': {
        title: 'Bipolar Disorder Treatment - Circle Psychiatry',
        description: 'Expert bipolar disorder treatment through therapy and medication. Manage mood swings effectively.',
        keywords: 'bipolar disorder, bipolar treatment, mood stabilizers, manic depression',
        ogType: 'article'
      },
      'trauma': {
        title: 'Trauma & PTSD Treatment - Circle Psychiatry',
        description: 'Specialized trauma and PTSD treatment. Evidence-based approaches for healing and recovery.',
        keywords: 'trauma treatment, PTSD therapy, post-traumatic stress disorder, trauma recovery',
        ogType: 'article'
      },
      'addiction': {
        title: 'Addiction Treatment - Circle Psychiatry',
        description: 'Compassionate addiction treatment and dual diagnosis care. Get support for recovery.',
        keywords: 'addiction treatment, substance abuse, dual diagnosis, recovery support',
        ogType: 'article'
      },
      'eating-disorders': {
        title: 'Eating Disorders Treatment - Circle Psychiatry',
        description: 'Specialized treatment for eating disorders including anorexia, bulimia, and binge eating disorder.',
        keywords: 'eating disorders, anorexia treatment, bulimia treatment, binge eating disorder',
        ogType: 'article'
      },
      'insomnia': {
        title: 'Insomnia Treatment - Circle Psychiatry',
        description: 'Expert insomnia treatment to improve sleep quality. Therapy and medication options available.',
        keywords: 'insomnia treatment, sleep disorders, sleep therapy, sleep medication',
        ogType: 'article'
      },
      'panic-attacks': {
        title: 'Panic Attack Treatment - Circle Psychiatry',
        description: 'Effective treatment for panic attacks and panic disorder. Learn to manage and reduce symptoms.',
        keywords: 'panic attacks, panic disorder treatment, anxiety attacks, panic therapy',
        ogType: 'article'
      },
      'stress-management': {
        title: 'Stress Management - Circle Psychiatry',
        description: 'Learn effective stress management techniques. Professional support for chronic stress.',
        keywords: 'stress management, stress reduction, coping strategies, stress therapy',
        ogType: 'article'
      },
      'mood-disorders': {
        title: 'Mood Disorders Treatment - Circle Psychiatry',
        description: 'Comprehensive treatment for mood disorders including depression and bipolar disorder.',
        keywords: 'mood disorders, depression, bipolar disorder, mood stabilization',
        ogType: 'article'
      },
      'telehealth': {
        title: 'Telehealth Services - Circle Psychiatry',
        description: 'Convenient telehealth mental health services. Quality psychiatric care from home.',
        keywords: 'telehealth, online therapy, virtual psychiatry, remote mental health care',
        ogType: 'website'
      },
      'med-management': {
        title: 'Medication Management - Circle Psychiatry',
        description: 'Expert psychiatric medication management. Safe and effective treatment monitoring.',
        keywords: 'medication management, psychiatric medications, medication monitoring, psychopharmacology',
        ogType: 'website'
      },
      'inclusive-therapy': {
        title: 'Inclusive Therapy - Circle Psychiatry',
        description: 'LGBTQ+ affirming and culturally sensitive mental health care for all.',
        keywords: 'inclusive therapy, LGBTQ therapy, culturally sensitive care, affirming therapy',
        ogType: 'website'
      },
      'blog': {
        title: 'Mental Health Blog - Circle Psychiatry',
        description: 'Expert insights on mental health, treatment options, and wellness tips from our team.',
        keywords: 'mental health blog, psychiatric articles, wellness tips, mental health insights',
        ogType: 'website'
      },
      'privacy-policy': {
        title: 'Privacy Policy - Circle Psychiatry',
        description: 'Circle Psychiatry privacy policy and data protection practices.',
        keywords: 'privacy policy, data protection, HIPAA compliance',
        noIndex: true
      },
      'terms-conditions': {
        title: 'Terms & Conditions - Circle Psychiatry',
        description: 'Circle Psychiatry terms and conditions of service.',
        keywords: 'terms and conditions, terms of service',
        noIndex: true
      },
      'accessibility': {
        title: 'Accessibility Statement - Circle Psychiatry',
        description: 'Circle Psychiatry accessibility commitment and features.',
        keywords: 'accessibility, WCAG compliance, accessible website',
        ogType: 'website'
      },
      'refer-patient': {
        title: 'Refer a Patient - Circle Psychiatry',
        description: 'Healthcare providers can refer patients to Circle Psychiatry for mental health care.',
        keywords: 'patient referral, healthcare provider referral, psychiatric referral',
        ogType: 'website'
      },
      'conditions': {
        title: 'Mental Health Conditions - Circle Psychiatry',
        description: 'Learn about mental health conditions we treat including anxiety, depression, ADHD, and more.',
        keywords: 'mental health conditions, psychiatric disorders, mental illness treatment',
        ogType: 'website'
      }
    };

    return seoDataMap[pageName] || {
      title: 'Circle Psychiatry - Mental Health Care',
      description: 'Compassionate mental health care through teletherapy and medication management.',
      keywords: 'mental health, psychiatry, teletherapy'
    };
  }
}
