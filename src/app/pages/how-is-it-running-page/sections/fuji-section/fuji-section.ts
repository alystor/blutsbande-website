import {Component} from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'bb-fuji-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe
  ],
  templateUrl: './fuji-section.html',
  styleUrl: './fuji-section.scss',
})
export class FujiSection {

  currentIndex = 0

  protected imageLoaded() {

    const frames = [1, 2, 3].map(n => document.getElementById("fuji-frame-" + n))

    ScrollTrigger.create({
      trigger: "#fuji-animation-container",
      start: "top 33%",
      end: "center 40%",
      onUpdate: self => {
        const imageIndex = Math.min(frames.length - 1, Math.floor(self.progress * frames.length))
        if (imageIndex != this.currentIndex) {
          this.currentIndex = imageIndex
          frames.forEach((frame, index) => {
            frame!.style.opacity = (index === this.currentIndex) ? '1' : '0'
          })
        }
      }
    })

    ScrollTrigger.create({
      trigger: "#fuji-transition-container",
      start: "top 80%",
      end: "top 1px",
      onEnter: () => gsap.set("#fuji-transition-container", {opacity: 1, pointerEvents: "auto"}),
      onLeave: () => gsap.set("#fuji-transition-container", {opacity: 0, pointerEvents: "none"}),
      onEnterBack: () => gsap.set("#fuji-transition-container", {opacity: 1, pointerEvents: "auto"}),
      onLeaveBack: () => gsap.set("#fuji-transition-container", {opacity: 0, pointerEvents: "none"}),
      onUpdate: self => {
        if (self.progress > 0.2 && self.progress < 0.8) {
          gsap.to("#fuji-transition-text", {opacity: 1})
        } else {
          gsap.to("#fuji-transition-text", {opacity: 0})
        }
      }
    })
  }

}
