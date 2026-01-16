import {Component} from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {NextPageButton} from '../../../../components/next-page-button/next-page-button';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'bb-turin-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe,
    NextPageButton
  ],
  templateUrl: './turin-section.html',
  styleUrl: './turin-section.scss',
})
export class TurinSection {

  protected imageLoaded() {
    ScrollTrigger.create({
      trigger: "#turin-top-animation-container",
      start: "top center",
      end: "top top",
      onUpdate: self => {
        gsap.set("#turin-top-animation-image", {opacity: self.progress})
      }
    })

    const bottomImages = [1,2,3,4,5].map(n => document.getElementById("turin-bottom-image-" + n))

    const framesMapping: { [key: number]: number[] } = {
      1: [1],
      2: [1,2],
      3: [3],
      4: [4],
      5: [5],
      6: [4],
      7: [3],
    }

    ScrollTrigger.create({
      trigger: "#turin-bottom-animation-container",
      start: "top 33%",
      end: "bottom 33%",
      onUpdate: self => {
        const currentFrame = Math.min(7 - 1, Math.floor(self.progress * 7))
        bottomImages.forEach((img, index) => {
          img!.style.opacity = framesMapping[currentFrame + 1]!.includes(index + 1) ? '1' : '0'
        })
      }
    })
  }

}
