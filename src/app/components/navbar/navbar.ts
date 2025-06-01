import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  imports: [CommonModule, RouterModule]
})
export class Navbar implements AfterViewInit {
  menuOpen = false;
  activeSection = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      if(this.router?.url?.startsWith('/impressum')) {
        this.activeSection = '';
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
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