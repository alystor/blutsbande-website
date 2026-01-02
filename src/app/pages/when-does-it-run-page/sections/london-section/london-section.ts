import { Component } from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';

@Component({
  selector: 'bb-london-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe
  ],
  templateUrl: './london-section.html',
  styleUrl: './london-section.scss',
})
export class LondonSection {

}
