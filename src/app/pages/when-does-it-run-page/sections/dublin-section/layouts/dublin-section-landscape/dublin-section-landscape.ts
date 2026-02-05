import { Component } from '@angular/core';
import {TextView} from '../../../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../../../pipes/text-content-pipe';

@Component({
  selector: 'bb-dublin-section-landscape',
  imports: [
    TextView,
    TextContentPipe
  ],
  templateUrl: './dublin-section-landscape.html',
  styleUrl: './dublin-section-landscape.scss',
})
export class DublinSectionLandscape {

}
