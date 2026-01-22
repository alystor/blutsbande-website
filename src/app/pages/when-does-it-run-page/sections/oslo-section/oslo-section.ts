import { Component } from '@angular/core';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {ImageView} from '../../../../components/image-view/image-view';

@Component({
  selector: 'bb-oslo-section',
  imports: [
    TextView,
    TextContentPipe,
    ImageView
  ],
  templateUrl: './oslo-section.html',
  styleUrl: './oslo-section.scss',
})
export class OsloSection {

  protected indexList(length: number): number[] {
    return Array.from({length: length}, (_, i) => i);
  }

}
