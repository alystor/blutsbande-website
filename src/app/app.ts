import {Component, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationBar} from './components/navigation-bar/navigation-bar';
import {OverlayScrollbars} from 'overlayscrollbars';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationBar
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('blutsbande-website');

  ngOnInit() {
    OverlayScrollbars(document.body, {
      scrollbars: {
        autoHide: 'leave',
        autoHideDelay: 800,
      }
    });
  }

}
