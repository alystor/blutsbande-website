import {AfterViewInit, Component} from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'bb-monaco-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe
  ],
  templateUrl: './monaco-section.html',
  styleUrl: './monaco-section.scss',
})
export class MonacoSection implements AfterViewInit{

  ngAfterViewInit() {
  }

  imageLoaded() {
    ScrollTrigger.create({
      trigger: "#monaco-animation-container",
      start: "top top",
      end: "bottom bottom",
      markers: true,
      onEnter: () => gsap.set("#monaco-animation-container", { opacity: 1 }),
      onLeave: () => gsap.set("#monaco-animation-container", { opacity: 0 }),
      onEnterBack: () => gsap.set("#monaco-animation-container", { opacity: 1 }),
      onLeaveBack: () => gsap.set("#monaco-animation-container", { opacity: 0 })
    })
  }

}
