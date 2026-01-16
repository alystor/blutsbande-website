import {Component} from '@angular/core';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {ImageView} from '../../../../components/image-view/image-view';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {NextPageButton} from '../../../../components/next-page-button/next-page-button';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'bb-singapore-section',
  imports: [
    TextView,
    TextContentPipe,
    ImageView,
    NextPageButton
  ],
  templateUrl: './singapore-section.html',
  styleUrl: './singapore-section.scss',
})
export class SingaporeSection {

  currentIndex = 0

  protected imageLoaded() {
    const frames = [null, 1, 2, 3, 4, 5, 6, 7, 8].map(n => document.getElementById("singapore-frame-" + n))

    ScrollTrigger.create({
      trigger: "#singapore-animation-container",
      start: "center center",
      end: `+=${frames.length * 30}%`,
      pin: true,
      markers: true,
      onUpdate: self => {
        const imageIndex = Math.min(frames.length - 1, Math.floor(self.progress * frames.length))
        if (imageIndex != this.currentIndex) {
          this.currentIndex = imageIndex
          frames.forEach((frame, index) => {
            if(frame){
              frame!.style.opacity = (index === this.currentIndex) ? '1' : '0'
            }
          })
        }
      }
    })

  }
}
