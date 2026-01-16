import {Component} from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';

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

    ScrollTrigger.create({
      trigger: "#donetsk-animation-container",
      start: "top center",
      end: "top top",
      pin: true,
      onEnter: () => {
        document.getElementById("donetsk-frame-1-1")!.style.opacity = '0'
      },
      onLeaveBack: () => {
        document.getElementById("donetsk-frame-1-1")!.style.opacity = '1'
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
