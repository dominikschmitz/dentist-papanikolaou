
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Footer } from './components/footer/footer';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, Services, Footer, RouterModule, CommonModule],
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  protected title = 'zahnarztpraxis';
  isImpressumRoute = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isImpressumRoute = this.router?.url?.startsWith('/impressum');
    });
  }
}
