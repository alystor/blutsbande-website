import {Component} from '@angular/core';
import {TextView} from "../../../../components/text-view/text-view";
import {ImageView} from '../../../../components/image-view/image-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';

@Component({
  selector: 'bb-alexandria-section',
  imports: [
    TextView,
    ImageView,
    TextContentPipe
  ],
  templateUrl: './alexandria-section.html',
  styleUrl: './alexandria-section.scss',
})
export class AlexandriaSection {

  imageLoaded() {
    ScrollTrigger.create({
      trigger: "#alexandria-first-image",
      start: "top center",
      onEnter: () => {
        gsap.set("#alexandria-first-image", {opacity: 0});
        gsap.set("#alexandria-second-image", {opacity: 1});
        gsap.set("#alexandria-info-text", {opacity: 1});
      },
      onLeaveBack: () => {
        gsap.set("#alexandria-first-image", {opacity: 1});
        gsap.set("#alexandria-second-image", {opacity: 0});
        gsap.set("#alexandria-info-text", {opacity: 0});
      }
    })
  }

}
