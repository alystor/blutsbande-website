import {Component} from '@angular/core';
import {TextView} from '../../../../components/text-view/text-view';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'bb-istanbul-section',
  imports: [
    TextView,
    ImageView,
    TextContentPipe
  ],
  templateUrl: './istanbul-section.html',
  styleUrl: './istanbul-section.scss',
})
export class IstanbulSection {

  currentIndex = 0

  protected imageLoaded() {
    const frame = document.getElementById("istanbul-top-frame-1")

    ScrollTrigger.create({
      trigger: "#istanbul-top-animation-container",
      start: "top 25%",
      end: "top 25%",
      onEnter: () => {
        frame!.style.opacity = '1'
      },
      onLeaveBack: () => {
        frame!.style.opacity = '0'
      }
    })

    const frames = [1, 2, 3, 4].map(n => document.getElementById("istanbul-bottom-frame-" + n))

    ScrollTrigger.create({
      trigger: "#istanbul-bottom-animation-container",
      start: "top 5%",
      end: "top -20%",
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
      trigger: "#istanbul-transition-container",
      start: "top 80%",
      end: "top 1px",
      onEnter: () => gsap.set("#istanbul-transition-container", {opacity: 1, pointerEvents: "auto"}),
      onLeave: () => gsap.set("#istanbul-transition-container", {opacity: 0, pointerEvents: "none"}),
      onEnterBack: () => gsap.set("#istanbul-transition-container", {opacity: 1, pointerEvents: "auto"}),
      onLeaveBack: () => gsap.set("#istanbul-transition-container", {opacity: 0, pointerEvents: "none"}),
    })
  }

}
