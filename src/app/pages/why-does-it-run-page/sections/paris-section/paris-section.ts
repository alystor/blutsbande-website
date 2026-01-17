import { Component } from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {NextPageButton} from '../../../../components/next-page-button/next-page-button';

@Component({
  selector: 'bb-paris-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe,
    NextPageButton
  ],
  templateUrl: './paris-section.html',
  styleUrl: './paris-section.scss',
})
export class ParisSection {

  protected imageLoaded() {
    const frame1 = document.getElementById("paris-frame-1")
    const frame2 = document.getElementById("paris-frame-2")

    ScrollTrigger.create({
      trigger: "#paris-animation-container",
      start: "center 66%",
      end: "center 66%",
      onEnter: () => {
        frame1!.style.opacity = '0'
        frame2!.style.opacity = '1'
      },
      onLeaveBack: () => {
        frame1!.style.opacity = '1'
        frame2!.style.opacity = '0'
      }
    })
  }

}
