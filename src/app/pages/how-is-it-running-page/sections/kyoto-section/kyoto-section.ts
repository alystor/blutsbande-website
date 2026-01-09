import { Component } from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';

@Component({
  selector: 'bb-kyoto-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe
  ],
  templateUrl: './kyoto-section.html',
  styleUrl: './kyoto-section.scss',
})
export class KyotoSection {

}
