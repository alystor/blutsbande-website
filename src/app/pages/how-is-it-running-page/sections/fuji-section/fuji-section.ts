import {ChangeDetectorRef, Component} from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'bb-fuji-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe
  ],
  templateUrl: './fuji-section.html',
  styleUrl: './fuji-section.scss',
})
export class FujiSection {

  constructor(private cdk: ChangeDetectorRef) {
  }

  images = [
    "/fuji/E1.png",
    "/fuji/E2.png",
    "/fuji/E3.png",
    "/fuji/E4.png"
  ]

  currentIndex = 0
  currentImage = this.images[this.currentIndex]

  imageLoaded() {
    ScrollTrigger.create({
      trigger: "#fuji-image-1",
      start: "top center",
      endTrigger: "#fuji-image-1",
      end: "bottom 30%",
      markers: true,
      onUpdate: self => {
        const imageIndex = Math.min(this.images.length - 1, Math.floor(self.progress * this.images.length))
        if (imageIndex != this.currentIndex) {
          this.currentIndex = imageIndex
          this.currentImage = this.images[this.currentIndex]
          this.cdk.detectChanges()
        }
      }
    })
  }

}
