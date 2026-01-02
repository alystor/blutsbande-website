import { Component } from '@angular/core';
import {ImageView} from '../image-view/image-view';

@Component({
  selector: 'bb-navigation-bar',
  imports: [
    ImageView
  ],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss',
})
export class NavigationBar {

}
