import { Component } from '@angular/core';
import {TextContentPipe} from "../../../../../../pipes/text-content-pipe";
import {TextView} from "../../../../../../components/text-view/text-view";

@Component({
  selector: 'bb-dublin-section-portrait',
    imports: [
        TextContentPipe,
        TextView
    ],
  templateUrl: './dublin-section-portrait.html',
  styleUrl: './dublin-section-portrait.scss',
})
export class DublinSectionPortrait {

}
