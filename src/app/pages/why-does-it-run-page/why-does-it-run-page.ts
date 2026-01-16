import { Component } from '@angular/core';
import {AlexandriaSection} from './sections/alexandria-section/alexandria-section';
import {DonetskSection} from './sections/donetsk-section/donetsk-section';
import {IstanbulSection} from './sections/istanbul-section/istanbul-section';
import {JakartaSection} from './sections/jakarta-section/jakarta-section';
import {MilanSection} from './sections/milan-section/milan-section';

@Component({
  selector: 'bb-why-does-it-run-page',
  imports: [
    AlexandriaSection,
    DonetskSection,
    IstanbulSection,
    JakartaSection,
    MilanSection
  ],
  templateUrl: './why-does-it-run-page.html',
  styleUrl: './why-does-it-run-page.scss',
})
export class WhyDoesItRunPage {

}
