import {Component, inject, OnDestroy} from '@angular/core';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';
import {ImageView} from '../../../../components/image-view/image-view';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {
  OrientationLayoutContainer
} from '../../../../components/orientation-layout-container/orientation-layout-container';
import {BreakpointService} from '../../../../service/breakpoint-service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'bb-manchester-section',
  imports: [
    TextView,
    TextContentPipe,
    ImageView,
    OrientationLayoutContainer
  ],
  templateUrl: './manchester-section.html',
  styleUrl: './manchester-section.scss',
})
export class ManchesterSection implements OnDestroy {

  private breakpointService = inject(BreakpointService)
  private orientationSubscription?: Subscription
  private landscapeTrigger?: ScrollTrigger
  private portraitTrigger?: ScrollTrigger

  currentIndex = 0

  constructor() {
    this.orientationSubscription = this.breakpointService.isLandscape$.subscribe(isLandscape => {
      this.destroyTriggers()

      setTimeout(() => {
        this.createTriggers(isLandscape)
        ScrollTrigger.refresh()
      }, 100)
    })
  }

  ngOnDestroy() {
    this.orientationSubscription?.unsubscribe()
    this.destroyTriggers()
  }

  private destroyTriggers() {
    if (this.landscapeTrigger) {
      this.landscapeTrigger.kill()
      this.landscapeTrigger = undefined
    }
    if (this.portraitTrigger) {
      this.portraitTrigger.kill()
      this.portraitTrigger = undefined
    }
  }

  private createTriggers(isLandscape: boolean) {
    if (isLandscape) {
      this.createLandscapeTrigger()
    } else {
      this.createPortraitTrigger()
    }
  }

  private createLandscapeTrigger() {
    const frames = [1, 2, 3, 4, 5, 6].map(n => document.getElementById("manchester-frame-" + n))

    if (frames.some(frame => !frame)) {
      return
    }

    this.landscapeTrigger = ScrollTrigger.create({
      trigger: "#manchester-animation-container",
      start: "top 55%",
      end: "center 50%",
      onUpdate: self => {
        const imageIndex = Math.min(frames.length - 1, Math.floor(self.progress * frames.length))
        if (imageIndex != this.currentIndex) {
          this.currentIndex = imageIndex
          frames.forEach((frame, index) => {
            if (frame) {
              frame.style.opacity = (index === this.currentIndex) ? '1' : '0'
            }
          })
        }
      }
    })
  }

  private createPortraitTrigger() {
    const framesP = [1, 2, 3, 4, 5, 6].map(n => document.getElementById("manchester-frame-" + n + "-p"))

    if (framesP.some(frame => !frame)) {
      return
    }

    this.portraitTrigger = ScrollTrigger.create({
      trigger: "#manchester-animation-container-p",
      start: "top 20%",
      end: "bottom 80%",
      onUpdate: self => {
        const imageIndex = Math.min(framesP.length - 1, Math.floor(self.progress * framesP.length))
        if (imageIndex != this.currentIndex) {
          this.currentIndex = imageIndex
          framesP.forEach((frame, index) => {
            if (frame) {
              frame.style.opacity = (index === this.currentIndex) ? '1' : '0'
            }
          })
        }
      }
    })
  }

  protected imageLoaded() {
    this.breakpointService.isLandscape$.subscribe(isLandscape => {
      this.createTriggers(isLandscape)
      ScrollTrigger.refresh()
    }).unsubscribe()
  }
}
