import {Component} from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'bb-liverpool-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe
  ],
  templateUrl: './liverpool-section.html',
  styleUrl: './liverpool-section.scss',
})
export class LiverpoolSection {
  currentIndex = 0

  imageLoaded() {

    ScrollTrigger.create({
      trigger: "#liverpool-animation-container",
      start: "top center",
      end: "center center",
      onUpdate: self => {
        const normalizedProgress = Math.min(self.progress / 0.75, 1);
        const scale = Math.max(normalizedProgress * 4.4, 1);

        console.log(scale)

        gsap.set("#liverpool-image-1", {scale: scale});
      },
      onLeave: () => {
        gsap.set("#liverpool-image-1", {opacity: 0});
        gsap.set("#liverpool-image-1", {translateY: "5vw"});

        gsap.set("#liverpool-text-1", {opacity: 0});
        gsap.set("#liverpool-text-1", {translateX: "5vw"});

        gsap.set("#liverpool-image-2", {opacity: 1});
        gsap.set("#liverpool-image-2", {translateY: 0});

        gsap.set("#liverpool-text-2", {opacity: 1});
      },

      onEnterBack: () => {
        gsap.set("#liverpool-image-1", {opacity: 1});
        gsap.set("#liverpool-image-1", {translateY: 0});

        gsap.set("#liverpool-text-1", {opacity: 1});
        gsap.set("#liverpool-text-1", {translateY: 0});

        gsap.set("#liverpool-image-2", {opacity: 0});
        gsap.set("#liverpool-image-2", {translateY: "5vw"});

        gsap.set("#liverpool-text-2", {opacity: 0});
      }
    })
  }

}
