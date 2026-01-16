import { Component } from '@angular/core';
import {AlexandriaSection} from './sections/alexandria-section/alexandria-section';
import {DonetskSection} from './sections/donetsk-section/donetsk-section';

@Component({
  selector: 'bb-why-does-it-run-page',
  imports: [
    AlexandriaSection,
    DonetskSection
  ],
  templateUrl: './why-does-it-run-page.html',
  styleUrl: './why-does-it-run-page.scss',
})
export class WhyDoesItRunPage {

}
