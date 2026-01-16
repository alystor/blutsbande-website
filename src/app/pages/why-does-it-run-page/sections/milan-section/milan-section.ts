import {Component} from '@angular/core';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {ImageView} from '../../../../components/image-view/image-view';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

@Component({
  selector: 'bb-milan-section',
  imports: [
    TextView,
    TextContentPipe,
    ImageView
  ],
  templateUrl: './milan-section.html',
  styleUrl: './milan-section.scss',
})
export class MilanSection {

  currentIndex = 0

  protected imageLoaded() {

    const frames = [1, 2, 3, 4].map(n => document.getElementById("milan-frame-" + n))

    ScrollTrigger.create({
      trigger: "#milan-animation-container",
      start: "top 66%",
      end: "bottom 75%",
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
