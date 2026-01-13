import {Component} from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'bb-pyongyang-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe,
  ],
  templateUrl: './pyongyang-section.html',
  styleUrl: './pyongyang-section.scss',
})
export class PyongyangSection {

  currentIndex = 0

  protected imageLoaded() {
    const frames = Array.from({length: 17}, (_, i) => i).map(n => document.getElementById("pyongyang-frame-" + (n + 1)))
    const texts = Array.from({length: 7}, (_, i) => i).map(n => document.getElementById("pyongyang-text-" + (n + 1)))

    ScrollTrigger.create({
      trigger: "#pyongyang-animation-container",
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
  }


  protected createTransitionTrigger() {
    ScrollTrigger.create({
      trigger: "#pyongyang-transition-container",
      start: "top bottom",
      end: "top top",
      onEnter: () => gsap.set("#pyongyang-transition-container", {opacity: 1}),
      onLeave: () => gsap.set("#pyongyang-transition-container", {opacity: 0}),
      onEnterBack: () => gsap.set("#pyongyang-transition-container", {opacity: 1}),
      onLeaveBack: () => gsap.set("#pyongyang-transition-container", {opacity: 0}),
      onUpdate: self => {
        if (self.progress > 0.2 && self.progress < 0.8) {
          gsap.to("#pyongyang-transition-text", {opacity: 1})
        } else {
          gsap.to("#pyongyang-transition-text", {opacity: 0})
        }
      }
    })
  }

}
