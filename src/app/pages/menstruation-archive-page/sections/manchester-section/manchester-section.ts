import { Component } from '@angular/core';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {ImageView} from '../../../../components/image-view/image-view';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

@Component({
  selector: 'bb-manchester-section',
  imports: [
    TextView,
    TextContentPipe,
    ImageView
  ],
  templateUrl: './manchester-section.html',
  styleUrl: './manchester-section.scss',
})
export class ManchesterSection {

  currentIndex = 0

  protected imageLoaded() {

    const frames = [1, 2, 3, 4, 5, 6].map(n => document.getElementById("manchester-frame-" + n))

    ScrollTrigger.create({
      trigger: "#manchester-animation-container",
      start: "top 66%",
      end: "top 33%",
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
