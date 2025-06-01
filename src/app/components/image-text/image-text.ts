import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'image-text-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-text.html',
  styleUrls: ['./image-text.scss']
})
export class ImageText {
  @Input() imageOnLeft: boolean = false;
  @Input() imageUrl: string = 'assets/images/beratung.jpg';
  @Input() altText: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
}
