import { Component } from '@angular/core';
import {TextView} from '../../components/text-view/text-view';
import {OrientationLayoutContainer} from '../../components/orientation-layout-container/orientation-layout-container';

@Component({
  selector: 'bb-imprint-page',
  imports: [
    TextView,
    OrientationLayoutContainer
  ],
  templateUrl: './imprint-page.html',
  styleUrl: './imprint-page.scss',
})
export class ImprintPage {

}
