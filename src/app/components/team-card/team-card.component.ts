// team-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-team-card',
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent {
  @Input() name!: string;
  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() qualifications?: string[] = [];
  @Input() showResumeButton: boolean = false;
  @Input() resumeUrl?: string;
}
