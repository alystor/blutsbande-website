import { Component } from '@angular/core';
import {TextView} from '../../../../components/text-view/text-view';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';

@Component({
  selector: 'bb-frankfurt-section',
  imports: [
    TextView,
    ImageView,
    TextContentPipe
  ],
  templateUrl: './frankfurt-section.html',
  styleUrl: './frankfurt-section.scss',
})
export class FrankfurtSection {

}
