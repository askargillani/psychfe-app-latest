import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { CtaComponent } from '../../components/cta/cta.component';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: Date;
  category: string;
  image: string;
  readTime: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeoTags(this.seoService.getPageSeoData('blog'));

    const schemas = [
      this.seoService.getOrganizationSchema(),
      this.seoService.getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' }
      ])
    ];
    this.seoService.addMultipleStructuredData(schemas);
  }

  blogPosts: BlogPost[] = [
    {
      id: 'movember-mens-mental-health',
      title: "Movember & Men's Mental Health: Talk, Check In, and Get Help",
      excerpt: "Every November, Movember turns mustaches into a conversation starter for a serious cause: men's mental health. Behind the facial hair and fundraising are real struggles, like higher rates of suicide, reluctance to seek help, and social expectations that keep men from asking for support.",
      content: '',
      author: 'Circle Psych Team',
      date: new Date('2024-11-15'),
      category: 'Mental Health',
      image: '/mens-health-awareness.jpg',
      readTime: '8 min read'
    },
    {
      id: 'early-childhood-mental-health',
      title: "Early Childhood Mental Health Awareness Month: How Early Relationships Shape Lifelong Well-Being",
      excerpt: "Early Childhood Mental Health Awareness Month highlights a simple yet profound truth: the first few years truly matter. The relationships, environments, and experiences children receive from birth through early childhood lay the foundation for emotional regulation, learning, and social skills.",
      content: '',
      author: 'Circle Psych Team',
      date: new Date('2024-11-20'),
      category: 'Mental Health',
      image: '/childhood-mental-health-awareness.jpg',
      readTime: '7 min read'
    },
    {
      id: 'depression-awareness-month',
      title: "Depression Awareness Month: Recognize the Signs, Find Help, and Start Healing with Circle Psychiatry",
      excerpt: "Depression is more than a passing low mood. It is a common, treatable medical condition that affects thinking, motivation, sleep, appetite, and relationships. Depression Awareness Month is a reminder that symptoms deserve attention, help exists, and asking for support is a sign of strength.",
      content: '',
      author: 'Circle Psych Team',
      date: new Date('2024-10-15'),
      category: 'Mental Health',
      image: '/depression-awareness.jpg',
      readTime: '7 min read'
    },
    {
      id: 'adhd-awareness-month',
      title: "ADHD Awareness Month: Understanding ADHD, Treatment Options, and How Circle Psychiatry Supports You",
      excerpt: "ADHD Awareness Month in October is a chance to clear up myths, spotlight real experiences, and remind people that attention-deficit/hyperactivity disorder shows up differently across age ranges and lives. Whether you're an adult who's always wondered why your mind races at meetings, a parent noticing a child struggling in class, or someone newly diagnosed, understanding ADHD is the first step toward practical support.",
      content: '',
      author: 'Circle Psych Team',
      date: new Date('2024-10-10'),
      category: 'Mental Health',
      image: '/adhd-awareness.jpg',
      readTime: '8 min read'
    },
    {
      id: 'suicide-prevention-recovery-month',
      title: "National Suicide Prevention and Recovery Month: How Circle Psych Supports Healing and Hope",
      excerpt: "September holds two powerful reminders: National Suicide Prevention Month and National Recovery Month. Both focus on hope, connection, and the practical supports that help people survive, heal, and build lives worth living. At Circle Psychiatry (Circle Psych) in Colorado Springs, clinicians spend every day helping people manage depression, addiction, anxiety, trauma, and other conditions that can increase suicide risk or complicate recovery.",
      content: '',
      author: 'Circle Psych Team',
      date: new Date('2024-09-15'),
      category: 'Mental Health',
      image: '/suicide-prevention.jpg',
      readTime: '8 min read'
    }
  ];

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
