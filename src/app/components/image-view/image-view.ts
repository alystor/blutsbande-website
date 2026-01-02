import {Component, Input} from '@angular/core';
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

}
