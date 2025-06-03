import { Component } from '@angular/core';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { HeroImage, IHeroImage } from '../../components/hero-image/hero-image.component';

@Component({
  selector: 'app-services',
  imports: [Accordion, AccordionContent, AccordionHeader, AccordionPanel, HeroImage],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
    active = "0";
    image: IHeroImage[] = [{ src: 'leistungen-header.jpg', alt: 'Leistungen'}]
}
