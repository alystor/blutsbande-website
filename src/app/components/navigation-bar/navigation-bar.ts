import {Component, inject} from '@angular/core';
import {ImageView} from '../image-view/image-view';
import {MenuPopup} from './menu-popup/menu-popup';
import {Dialog} from '@angular/cdk/dialog';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'bb-navigation-bar',
  imports: [
    ImageView
  ],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss',
})
export class NavigationBar {

  dialog: Dialog = inject(Dialog)
  activatedRoute: ActivatedRoute = inject(ActivatedRoute)

  protected openMenu() {
    this.dialog.open(MenuPopup)
  }

  protected shouldRenderMenu(): boolean {
    const route = this.activatedRoute.snapshot.firstChild

    return route?.data['showMenu'] ?? false
  }

  protected resolveMenuUrl() {
    const route = this.activatedRoute.snapshot.firstChild
    return route?.data['menuSrc'] ?? 'menu_ruby.png'
  }

}
