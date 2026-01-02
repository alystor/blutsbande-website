import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'bb-image-view',
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './image-view.html',
  styleUrl: './image-view.scss',
})
export class ImageView {

  @Input({required: true}) src: string = '';
  @Input({required: true}) alt: string = '';

  @Input() width?: string;
  @Input() height?: string;

  @Input() minWidth?: string;
  @Input() minHeight?: string;

  @Output() imageLoadedEvent = new EventEmitter<void>();

  protected imageLoaded() {
    this.imageLoadedEvent.emit()
  }

}
