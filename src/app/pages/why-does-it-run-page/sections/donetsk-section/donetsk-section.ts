import {Component} from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {gsap} from 'gsap';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'bb-donetsk-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe
  ],
  templateUrl: './donetsk-section.html',
  styleUrl: './donetsk-section.scss',
})
export class DonetskSection {

  currentIndex = 0

  protected imageLoaded() {

    const frames = [1, 2, 3].map(n => document.getElementById("donetsk-frame-" + n))

    const d4Wrapper = document.getElementById("donetsk-frame-1-1-wrapper")!;
    ScrollTrigger.create({
      trigger: "#donetsk-animation-container",
      start: "top center",
      end: "top top",
      pin: true,
      onEnter: () => {
        d4Wrapper.classList.add("donetsk-d4-hidden");
      },
      onLeaveBack: () => {
        d4Wrapper.classList.remove("donetsk-d4-hidden");
      },
      onUpdate: self => {
        const imageIndex = Math.min(frames.length - 1, Math.floor(self.progress * frames.length))
        if (imageIndex != this.currentIndex) {
          this.currentIndex = imageIndex
          frames.forEach((frame, index) => {
            if (frame) {
              frame.style.opacity = (index === this.currentIndex) ? '1' : '0'
            }
          })
        }
      }
    })
  }

}
