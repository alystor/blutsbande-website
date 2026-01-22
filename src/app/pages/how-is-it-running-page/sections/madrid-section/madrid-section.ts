import { Component } from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'bb-madrid-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe
  ],
  templateUrl: './madrid-section.html',
  styleUrl: './madrid-section.scss',
})
export class MadridSection {

  currentIndex = 0

  protected imageLoaded() {

    const frames = [1, 2, 3, 4].map(n => document.getElementById("madrid-frame-" + n))

    ScrollTrigger.create({
      trigger: "#madrid-animation-container",
      start: "top 33%",
      end: "bottom 66%",
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
