import { Component } from '@angular/core';
import {TokyoSection} from './sections/tokyo-section/tokyo-section';
import {ManchesterSection} from './sections/manchester-section/manchester-section';

@Component({
  selector: 'bb-menstruation-archive-page',
  imports: [
    TokyoSection,
    ManchesterSection
  ],
  templateUrl: './menstruation-archive-page.html',
  styleUrl: './menstruation-archive-page.scss',
})
export class MenstruationArchivePage {

}
