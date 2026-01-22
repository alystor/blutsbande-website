import { Component } from '@angular/core';
import {ImageView} from '../../components/image-view/image-view';
import {TextView} from '../../components/text-view/text-view';
import {TextContentPipe} from '../../pipes/text-content-pipe';
import {NextPageButton} from '../../components/next-page-button/next-page-button';

@Component({
  selector: 'bb-landing-page',
  imports: [
    ImageView,
    TextView,
    TextContentPipe,
    NextPageButton
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

}
