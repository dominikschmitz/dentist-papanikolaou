import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  imports: [CommonModule, RouterModule]
})
export class Navbar implements AfterViewInit {
  scrolled = false;
  mobileMenuOpen = false;
  activeSection = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      if(this.router?.url?.startsWith('/impressum')) {
        this.activeSection = '';
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  ngAfterViewInit() {
    const sections = document.querySelectorAll('.section');
    console.log("sec", sections)
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
  }
}