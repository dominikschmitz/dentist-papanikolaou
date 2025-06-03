import { Component, Input } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

export interface IHeroImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-hero-image',
  imports: [GalleriaModule],
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss']
})
export class HeroImage {
  @Input() images: IHeroImage[] = [];
  @Input() title: string = '';
  @Input() subtitle: string = '';

  get galleryImages() {
    return this.images.map((img) => ({
      previewImageSrc: img.src,
      thumbnailImageSrc: img.src,
      alt: img.alt
    }));
  }
}

