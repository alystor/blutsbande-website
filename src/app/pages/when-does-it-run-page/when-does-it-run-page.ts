import { Component } from '@angular/core';
import {DublinSection} from './sections/dublin-section/dublin-section';
import {FrankfurtSection} from './sections/frankfurt-section/frankfurt-section';
import {LondonSection} from './sections/london-section/london-section';

@Component({
  selector: 'bb-when-does-it-run-page',
  imports: [
    DublinSection,
    FrankfurtSection,
    LondonSection
  ],
  templateUrl: './when-does-it-run-page.html',
  styleUrl: './when-does-it-run-page.scss',
})
export class WhenDoesItRunPage {

}
