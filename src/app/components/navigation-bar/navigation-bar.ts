import {Component, inject} from '@angular/core';
import {ImageView} from '../image-view/image-view';
import {MenuPopup} from './menu-popup/menu-popup';
import {Dialog} from '@angular/cdk/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'bb-navigation-bar',
  imports: [
    ImageView
  ],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss',
})
export class NavigationBar {

  router: Router = inject(Router)
  dialog: Dialog = inject(Dialog)

  protected openMenu() {
    this.dialog.open(MenuPopup)
  }

  menuLookupTable: { [key: string]: string } = {
    "/when-does-it-run": "/menu_rosalie.png",
    "/why-does-it-run": "/menu_olivia.png",
    "/how-is-it-running": "/menu_violet.png",
    "/menstruation-archive": "/menu_celeste.png",
    "/bibliography": "/menu_ruby.png",
  }

  protected resolveMenuUrl() {
    return this.menuLookupTable[this.router.url] ?? "/menu_ruby.png"
  }

}
