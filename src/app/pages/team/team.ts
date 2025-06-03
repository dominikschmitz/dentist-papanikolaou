import { Component } from '@angular/core';
import { HeroImage, IHeroImage } from '../../components/hero-image/hero-image.component';
import { TeamCardComponent } from '../../components/team-card/team-card.component';
import { NgFor } from '@angular/common';
import { QuoteComponent } from '../../components/quote/quote.component';

@Component({
  selector: 'app-team',
  imports: [HeroImage, TeamCardComponent, NgFor,QuoteComponent],
  templateUrl: './team.html',
  styleUrl: './team.scss'
})
export class Team {
  images: IHeroImage[] = [
    {
      src: 'team1.jpg',
      alt: 'Gruppenfoto vom Team'
    },
    {
      src: 'team2.jpg',
      alt: 'Gruppenfoto vom Team 2'
    }
  ];

  team = [
    {
      name: 'Dr. Anna Müller',
      title: 'Zahnärztin',
      image: 'anna.jpg',
      qualifications: ['Implantologie', 'Kinderzahnheilkunde'],
      resumeUrl: 'assets/cv/anna.pdf'
    },
    {
      name: 'Max Berger',
      title: 'ZFA',
      image: 'max.jpg',
      qualifications: ['Prophylaxe', 'Abrechnung']
    },
    {
      name: 'Emila Dust',
      title: 'ZFA',
      image: 'emilia.jpg',
      qualifications: ['Beratung', 'Prophylaxe', 'Abrechnung']
    }
  ];
}
