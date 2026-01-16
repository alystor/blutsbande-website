import { Component } from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';

@Component({
  selector: 'bb-osaka-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe
  ],
  templateUrl: './osaka-section.html',
  styleUrl: './osaka-section.scss',
})
export class OsakaSection {

  protected imageLoaded() {
    ScrollTrigger.create({
      trigger: "#osaka-transition-container",
      start: "top 80%",
      end: "top 1px",
      onEnter: () => gsap.set("#osaka-transition-container", {opacity: 1, pointerEvents: "auto"}),
      onLeave: () => gsap.set("#osaka-transition-container", {opacity: 0, pointerEvents: "none"}),
      onEnterBack: () => gsap.set("#osaka-transition-container", {opacity: 1, pointerEvents: "auto"}),
      onLeaveBack: () => gsap.set("#osaka-transition-container", {opacity: 0, pointerEvents: "none"}),
      onUpdate: self => {
        if (self.progress > 0.2 && self.progress < 0.8) {
          gsap.to("#osaka-transition-text", {opacity: 1})
        } else {
          gsap.to("#osaka-transition-text", {opacity: 0})
        }
      }
    })
  }

}
