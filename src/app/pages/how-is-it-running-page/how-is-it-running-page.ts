import { Component } from '@angular/core';
import {BangaloreSection} from './sections/bangalore-section/bangalore-section';
import {FujiSection} from './sections/fuji-section/fuji-section';
import {HamburgSection} from './sections/hamburg-section/hamburg-section';

@Component({
  selector: 'bb-how-is-it-running-page',
  imports: [
    BangaloreSection,
    FujiSection,
    HamburgSection
  ],
  templateUrl: './how-is-it-running-page.html',
  styleUrl: './how-is-it-running-page.scss',
})
export class HowIsItRunningPage {

}
