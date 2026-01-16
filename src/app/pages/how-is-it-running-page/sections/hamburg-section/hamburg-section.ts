import {Component} from '@angular/core';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {ImageView} from '../../../../components/image-view/image-view';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'bb-hamburg-section',
  imports: [
    TextView,
    TextContentPipe,
    ImageView
  ],
  templateUrl: './hamburg-section.html',
  styleUrl: './hamburg-section.scss',
})
export class HamburgSection {

  currentIndex = 0

  imageLoaded() {
    const frames = [1, 2, 3, 4, 5].map(n => document.getElementById("hamburg-frame-" + n))

    ScrollTrigger.create({
      trigger: "#hamburg-animation-container",
      start: "top center",
      end: "bottom 60%",
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
