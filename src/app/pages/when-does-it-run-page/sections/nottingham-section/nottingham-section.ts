import {Component} from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'bb-nottingham-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe
  ],
  templateUrl: './nottingham-section.html',
  styleUrl: './nottingham-section.scss',
})
export class NottinghamSection {

  imageLoaded() {
    let currentPage = 0;

    const textHTMLElements = [
      document.getElementById("nottingham-animation-text-1"),
      document.getElementById("nottingham-animation-text-2"),
      document.getElementById("nottingham-animation-text-3"),
      document.getElementById("nottingham-animation-text-4"),
    ]

    const progressBarElement = document.getElementById("nottingham-progress-bar")!;

    ScrollTrigger.create({
      trigger: "#nottingham-animation-container",
      start: 'top top',
      end: `+=${(textHTMLElements.length + 1) * 100}%`, // Zusätzliche Scroll-Distanz für alle Seiten
      pin: true,
      scrub: false,
      onUpdate: (self) => {
        const newPage = Math.min(Math.floor(self.progress * (textHTMLElements.length + 1)), textHTMLElements.length);
        const pageProgress = (self.progress * (textHTMLElements.length + 1)) - newPage;

        progressBarElement.style.height = (pageProgress * 100) * 0.5 + '%';

        if (newPage !== currentPage) {
          currentPage = newPage;
          textHTMLElements.forEach((el, index) => {
            if (el) {
              if (index === currentPage - 1) {
                el.style.opacity = '1';
              } else {
                console.log(el)
                el.style.opacity = '0';
              }
            }
          });
        }
      }
    });
  }

}
