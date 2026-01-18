import { Component } from '@angular/core';
import {TextView} from "../../../../components/text-view/text-view";
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {
  OrientationLayoutContainer
} from '../../../../components/orientation-layout-container/orientation-layout-container';

@Component({
  selector: 'bb-tokyo-section',
  imports: [
    TextView,
    TextContentPipe,
    OrientationLayoutContainer
  ],
  templateUrl: './tokyo-section.html',
  styleUrl: './tokyo-section.scss',
})
export class TokyoSection {

}
