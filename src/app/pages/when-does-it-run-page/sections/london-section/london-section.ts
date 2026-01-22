import {Component} from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'bb-london-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe
  ],
  templateUrl: './london-section.html',
  styleUrl: './london-section.scss',
})
export class LondonSection {

  imageLoaded() {
    ScrollTrigger.create({
      trigger: "#animation-container",
      start: `50% 40%`,
      end: "bottom 20%",
      scrub: true,
      onUpdate: (self) => {
        const element = document.getElementById('animation-element-1')!;

        const position = this.getPosition(self.progress)
        element.style.top = position.top;
        element.style.left = position.left;
      }
    });
  }

  private getPosition(progress: number): { top: string, left: string } {
    progress = Math.max(0, Math.min(1, progress)) * 4;
    const i = Math.floor(progress);
    const t = progress - i;
    const tops = [64.4, 69.5, 73.5, 78, 80];
    const lefts = [67.9, 65.5, 62, 57, 52];
    const j = Math.min(i, 4);
    return {
      top: `${tops[j] + (tops[j + 1] - tops[j] || 0) * t}vw`,
      left: `${lefts[j] + (lefts[j + 1] - lefts[j] || 0) * t}vw`
    };
  }

}
