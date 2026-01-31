import {Component, inject, Input} from '@angular/core';
import {ImageView} from '../image-view/image-view';
import {TextView} from '../text-view/text-view';
import {Router} from '@angular/router';
import {OrientationLayoutContainer} from '../orientation-layout-container/orientation-layout-container';

@Component({
  selector: 'bb-next-page-button',
  imports: [
    ImageView,
    TextView,
    OrientationLayoutContainer,
  ],
  templateUrl: './next-page-button.html',
  styleUrl: './next-page-button.scss',
})
export class NextPageButton {

  router: Router = inject(Router)

  @Input({required: true})
  color: string = ""

  @Input({required: true})
  url: string = ""

  @Input({required: true})
  text: string = ""

  protected navigateTo() {
    this.router.navigateByUrl(this.url).then(() => {
      window.location.reload();
    });
  }
}
