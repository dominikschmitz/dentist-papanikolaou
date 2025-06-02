
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuickContactHeader } from './components/quick-contact-header/quick-contact-header';
import { StickyPanel } from './components/sticky-panel/sticky-panel';

@Component({
  selector: 'app-root',
  imports: [Navbar, StickyPanel, Footer, RouterModule, CommonModule, QuickContactHeader],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App implements OnInit {
  protected title = 'zahnarztpraxis';
  showModal = false;
  isImpressumRoute = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isImpressumRoute = this.router?.url?.startsWith('/impressum');
    });
  }

  ngOnInit() {
    const visited = localStorage.getItem('visited');
    console.log(visited);
    if (!visited) {
      this.showModal = true;
      localStorage.setItem('visited', 'true');
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
