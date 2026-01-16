import { Component } from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {TextView} from '../../../../components/text-view/text-view';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'bb-shenzhen-section',
  imports: [
    ImageView,
    TextContentPipe,
    TextView
  ],
  templateUrl: './shenzhen-section.html',
  styleUrl: './shenzhen-section.scss',
})
export class ShenzhenSection {

  currentIndex = 0

  protected imageLoaded() {
    const frames = Array.from({length: 7}, (_, i) => i).map(n => document.getElementById("shenzhen-frame-" + (n + 1)))
    const texts = Array.from({length: 4}, (_, i) => i).map(n => document.getElementById("shenzhen-text-" + (n + 1)))

    ScrollTrigger.create({
      trigger: "#shenzhen-animation-container",
      start: "bottom bottom",
      end: frames.length * 30 + "%",
      pin: true,
      onUpdate: self => {
        const imageIndex = Math.min(frames.length - 1, Math.floor(self.progress * frames.length))
        if (imageIndex != this.currentIndex) {
          this.currentIndex = imageIndex
          frames.forEach((frame, index) => {
            frame!.style.opacity = (index === this.currentIndex) ? '1' : '0'
          })

          texts.forEach((text, index) => {
            const allowedIndex = text!.dataset['frameIndex']!.split(",").map(i => parseInt(i))
            if (allowedIndex.includes(this.currentIndex + 1)) {
              text!.style.opacity = '1'
            } else {
              text!.style.opacity = '0'
            }
          })
        }
      }
    })

    ScrollTrigger.create({
      trigger: "#shenzhen-summary-container",
      start: "bottom bottom",
      end: "bottom top",
      onEnter: () => gsap.set("#shenzhen-transition-container", {opacity: 1, pointerEvents: "auto"}),
      onLeave: () => gsap.set("#shenzhen-transition-container", {opacity: 0, pointerEvents: "none"}),
      onEnterBack: () => gsap.set("#shenzhen-transition-container", {opacity: 1, pointerEvents: "auto"}),
      onLeaveBack: () => gsap.set("#shenzhen-transition-container", {opacity: 0, pointerEvents: "none"}),
      onUpdate: self => {
        if (self.progress > 0.2 && self.progress < 0.8) {
          gsap.to("#shenzhen-transition-text", {opacity: 1})
        } else {
          gsap.to("#shenzhen-transition-text", {opacity: 0})
        }
      }
    })
  }

}
