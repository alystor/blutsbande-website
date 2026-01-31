import { Component } from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {NextPageButton} from '../../../../components/next-page-button/next-page-button';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';

@Component({
  selector: 'bb-landing-page-landscape',
  imports: [
    ImageView,
    TextView,
    NextPageButton,
    TextContentPipe
  ],
  templateUrl: './landing-page-landscape.html',
  styleUrl: './landing-page-landscape.scss',
})
export class LandingPageLandscape {

}
