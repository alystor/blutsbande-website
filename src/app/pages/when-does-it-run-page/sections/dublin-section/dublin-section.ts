import { Component } from '@angular/core';
import {TextView} from "../../../../components/text-view/text-view";
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {
  OrientationLayoutContainer
} from '../../../../components/orientation-layout-container/orientation-layout-container';
import {DublinSectionLandscape} from './layouts/dublin-section-landscape/dublin-section-landscape';
import {DublinSectionPortrait} from './layouts/dublin-section-portrait/dublin-section-portrait';

@Component({
  selector: 'bb-dublin-section',
  imports: [
    TextView,
    TextContentPipe,
    OrientationLayoutContainer,
    DublinSectionLandscape,
    DublinSectionPortrait
  ],
  templateUrl: './dublin-section.html',
  styleUrl: './dublin-section.scss',
})
export class DublinSection {

}
