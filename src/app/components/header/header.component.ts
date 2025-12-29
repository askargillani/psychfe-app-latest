import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavChild {
  label: string;
  path: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navItems: NavItem[] = [
    { label: 'Home', href: '/', children: [] },
    { label: 'About', href: '/about', children: [] },
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'Medication Management', path: '/services/med-management' },
        { label: 'Therapy', path: '/services/inclusive-therapy' },
        { label: 'Telehealth', path: '/telehealth' }
      ]
    },
    {
      label: 'Conditions',
      href: '/conditions',
      children: [
        { label: 'Depression', path: '/conditions/depression' },
        { label: 'Bipolar Disorder', path: '/conditions/bipolar' },
        { label: 'Anxiety', path: '/conditions/anxiety' },
        { label: 'ADHD', path: '/conditions/adhd' },
        { label: 'PTSD & Trauma', path: '/conditions/trauma' },
        { label: 'Mood Disorders', path: '/conditions/mood-disorders' },
        { label: 'Panic Attacks', path: '/conditions/panic-attacks' },
        { label: 'Stress Management', path: '/conditions/stress-management' },
        { label: 'Insomnia', path: '/conditions/insomnia' },
        { label: 'Eating Disorders', path: '/conditions/eating-disorders' },
        { label: 'Addiction', path: '/conditions/addiction' }
      ]
    },
    { label: 'Blog', href: '/blog', children: [] },
    { label: 'Contact', href: '/contact', children: [] },
    {
      label: 'Patient Portal',
      href: 'https://31925.portal.athenahealth.com/',
      children: []
    }
  ];

  activeSubmenu: string | null = null;
  mobileMenuOpen = false;
  isMobile = false;
  private closeMenuTimeout: any;

  ngOnInit(): void {
    this.checkMobileView();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.checkMobileView();
  }

  checkMobileView(): void {
    this.isMobile = window.innerWidth < 768;
  }

  toggleSubmenu(itemLabel: string): void {
    this.activeSubmenu = this.activeSubmenu === itemLabel ? null : itemLabel;
  }

  openSubmenu(itemLabel: string): void {
    this.cancelCloseSubmenu();
    this.activeSubmenu = itemLabel;
  }

  closeSubmenu(): void {
    this.activeSubmenu = null;
  }

  closeSubmenuWithDelay(): void {
    if (this.closeMenuTimeout) {
      clearTimeout(this.closeMenuTimeout);
    }
    this.closeMenuTimeout = setTimeout(() => {
      this.activeSubmenu = null;
    }, 150);
  }

  cancelCloseSubmenu(): void {
    if (this.closeMenuTimeout) {
      clearTimeout(this.closeMenuTimeout);
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  hasChildren(item: NavItem): boolean {
    return item.children ? item.children.length > 0 : false;
  }

  isExternal(href: string): boolean {
    return href.startsWith('http');
  }
}
