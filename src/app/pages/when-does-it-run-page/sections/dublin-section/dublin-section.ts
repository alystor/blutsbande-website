import { Component } from '@angular/core';
import {TextView} from "../../../../components/text-view/text-view";
import {TextContentPipe} from '../../../../pipes/text-content-pipe';

@Component({
  selector: 'bb-dublin-section',
  imports: [
    TextView,
    TextContentPipe
  ],
  templateUrl: './dublin-section.html',
  styleUrl: './dublin-section.scss',
})
export class DublinSection {

}
