import {Component} from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';

@Component({
  selector: 'bb-jakarta-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe
  ],
  templateUrl: './jakarta-section.html',
  styleUrl: './jakarta-section.scss',
})
export class JakartaSection {

  currentIndex = 0

  protected imageLoaded() {
    const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => document.getElementById("jakarta-frame-" + n))

    ScrollTrigger.create({
      trigger: "#jakarta-animation-container",
      start: "top 20%",
      end: "bottom bottom",
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
  }
}
