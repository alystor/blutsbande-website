import { Component } from '@angular/core';
import {ImageView} from "../../../../components/image-view/image-view";
import {NextPageButton} from "../../../../components/next-page-button/next-page-button";
import {TextContentPipe} from "../../../../pipes/text-content-pipe";
import {TextView} from "../../../../components/text-view/text-view";

@Component({
  selector: 'bb-landing-page-portrait',
    imports: [
        ImageView,
        NextPageButton,
        TextContentPipe,
        TextView
    ],
  templateUrl: './landing-page-portrait.html',
  styleUrl: './landing-page-portrait.scss',
})
export class LandingPagePortrait {

}
