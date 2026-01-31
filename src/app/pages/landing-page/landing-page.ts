import { Component } from '@angular/core';
import {OrientationLayoutContainer} from '../../components/orientation-layout-container/orientation-layout-container';
import {LandingPageLandscape} from './layouts/landing-page-landscape/landing-page-landscape';
import {LandingPagePortrait} from './layouts/landing-page-portrait/landing-page-portrait';

@Component({
  selector: 'bb-landing-page',
  imports: [
    OrientationLayoutContainer,
    LandingPageLandscape,
    LandingPagePortrait
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

}
