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
    const frame1 = document.getElementById("istanbul-top-frame-1")
    const frame2 = document.getElementById("istanbul-top-frame-2")

    ScrollTrigger.create({
      trigger: "#istanbul-top-animation-container",
      start: "top 33%",
      end: "top 33%",
      onEnter: () => {
        frame1!.style.opacity = '0'
        frame2!.style.opacity = '1'
      },
      onLeaveBack: () => {
        frame1!.style.opacity = '1'
        frame2!.style.opacity = '0'
      }
    })

    const frames = [1, 2, 3, 4].map(n => document.getElementById("istanbul-bottom-frame-" + n))

    ScrollTrigger.create({
      trigger: "#istanbul-bottom-animation-container",
      start: "top 66%",
      end: "top -10%",
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
      onEnter: () => gsap.set("#istanbul-transition-container", {opacity: 1}),
      onLeave: () => gsap.set("#istanbul-transition-container", {opacity: 0}),
      onEnterBack: () => gsap.set("#istanbul-transition-container", {opacity: 1}),
      onLeaveBack: () => gsap.set("#istanbul-transition-container", {opacity: 0}),
      onUpdate: self => {
        if (self.progress > 0.2 && self.progress < 0.8) {
          gsap.to("#istanbul-transition-text", {opacity: 1})
        } else {
          gsap.to("#istanbul-transition-text", {opacity: 0})
        }
      }
    })
  }

}
