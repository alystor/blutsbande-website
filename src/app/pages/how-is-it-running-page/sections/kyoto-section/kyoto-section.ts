import {Component} from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'bb-kyoto-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe
  ],
  templateUrl: './kyoto-section.html',
  styleUrl: './kyoto-section.scss',
})
export class KyotoSection {

  protected imageLoaded() {
    const frame1 = document.getElementById("kyoto-frame-1")
    const frame2 = document.getElementById("kyoto-frame-2")

    ScrollTrigger.create({
      trigger:"#kyoto-animation-container",
      start:"center center",
      onEnter: () => {
        frame1!.style.opacity = '0'
        frame2!.style.opacity = '1'
      },
      onLeaveBack: () => {
        frame1!.style.opacity = '1'
        frame2!.style.opacity = '0'
      }
    })
  }

}
