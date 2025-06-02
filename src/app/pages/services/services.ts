import { Component } from '@angular/core';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';

@Component({
  selector: 'app-services',
  imports: [Accordion, AccordionContent, AccordionHeader, AccordionPanel],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
    active = "0";
}
