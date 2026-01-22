import {Component, inject} from '@angular/core';
import {ImageView} from '../../image-view/image-view';
import {TextView} from '../../text-view/text-view';
import {DialogRef} from '@angular/cdk/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'bb-menu-popup',
  imports: [
    ImageView,
    TextView,
  ],
  templateUrl: './menu-popup.html',
  styleUrl: './menu-popup.scss',
})
export class MenuPopup {
  router: Router = inject(Router)
  dialogRef = inject(DialogRef);

  protected navigateTo(route: string) {
    this.router.navigateByUrl(route).then(() => {
      window.location.reload();
    });
  }
}
