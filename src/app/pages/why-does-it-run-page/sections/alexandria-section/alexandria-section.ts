import {Component} from '@angular/core';
import {TextView} from "../../../../components/text-view/text-view";
import {ImageView} from '../../../../components/image-view/image-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';

gsap.registerPlugin(ScrollTrigger)

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

    ScrollTrigger.create({
      trigger: "#alexandria-transition-container",
      start: "top 80%",
      end: "top 1px",
      onEnter: () => gsap.set("#alexandria-transition-container", {opacity: 1, pointerEvents: "auto"}),
      onLeave: () => gsap.set("#alexandria-transition-container", {opacity: 0, pointerEvents: "none"}),
      onEnterBack: () => gsap.set("#alexandria-transition-container", {opacity: 1, pointerEvents: "auto"}),
      onLeaveBack: () => gsap.set("#alexandria-transition-container", {opacity: 0, pointerEvents: "none"}),
      onUpdate: self => {
        if (self.progress > 0.2 && self.progress < 0.8) {
          gsap.to("#alexandria-transition-text", {opacity: 1})
        } else {
          gsap.to("#alexandria-transition-text", {opacity: 0})
        }
      }
    })
  }

}
