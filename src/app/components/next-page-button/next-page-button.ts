import {Component, inject, Input} from '@angular/core';
import {ImageView} from '../image-view/image-view';
import {TextView} from '../text-view/text-view';
import {Router} from '@angular/router';

@Component({
  selector: 'bb-next-page-button',
  imports: [
    ImageView,
    TextView
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

  protected navigateTo() {
    this.router.navigateByUrl(this.url).then(() => {
      window.location.reload();
    });
  }
}
