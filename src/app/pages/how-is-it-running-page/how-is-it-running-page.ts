import { Component } from '@angular/core';
import {BangaloreSection} from './sections/bangalore-section/bangalore-section';
import {FujiSection} from './sections/fuji-section/fuji-section';
import {HamburgSection} from './sections/hamburg-section/hamburg-section';
import {KyotoSection} from './sections/kyoto-section/kyoto-section';
import {MadridSection} from './sections/madrid-section/madrid-section';
import {LiverpoolSection} from './sections/liverpool-section/liverpool-section';

@Component({
  selector: 'bb-how-is-it-running-page',
  imports: [
    BangaloreSection,
    FujiSection,
    HamburgSection,
    KyotoSection,
    MadridSection,
    LiverpoolSection
  ],
  templateUrl: './how-is-it-running-page.html',
  styleUrl: './how-is-it-running-page.scss',
})
export class HowIsItRunningPage {

}
