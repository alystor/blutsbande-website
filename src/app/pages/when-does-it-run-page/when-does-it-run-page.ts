import { Component } from '@angular/core';
import {DublinSection} from './sections/dublin-section/dublin-section';
import {FrankfurtSection} from './sections/frankfurt-section/frankfurt-section';
import {LondonSection} from './sections/london-section/london-section';
import {NottinghamSection} from './sections/nottingham-section/nottingham-section';
import {MonacoSection} from './sections/monaco-section/monaco-section';
import {OsloSection} from './sections/oslo-section/oslo-section';
import {PyongyangSection} from './sections/pyongyang-section/pyongyang-section';
import {ShenzhenSection} from './sections/shenzhen-section/shenzhen-section';
import {TurinSection} from './sections/turin-section/turin-section';

@Component({
  selector: 'bb-when-does-it-run-page',
  imports: [
    DublinSection,
    FrankfurtSection,
    LondonSection,
    NottinghamSection,
    MonacoSection,
    OsloSection,
    PyongyangSection,
    ShenzhenSection,
    TurinSection
  ],
  templateUrl: './when-does-it-run-page.html',
  styleUrl: './when-does-it-run-page.scss',
})
export class WhenDoesItRunPage {

}
