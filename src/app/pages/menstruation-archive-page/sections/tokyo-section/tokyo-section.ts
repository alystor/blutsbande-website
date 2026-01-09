import { Component } from '@angular/core';
import {TextView} from "../../../../components/text-view/text-view";
import {TextContentPipe} from '../../../../pipes/text-content-pipe';

@Component({
  selector: 'bb-tokyo-section',
  imports: [
    TextView,
    TextContentPipe
  ],
  templateUrl: './tokyo-section.html',
  styleUrl: './tokyo-section.scss',
})
export class TokyoSection {

}
