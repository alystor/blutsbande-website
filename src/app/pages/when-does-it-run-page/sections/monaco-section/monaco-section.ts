import { Component } from '@angular/core';
import {ImageView} from '../../../../components/image-view/image-view';
import {TextView} from '../../../../components/text-view/text-view';
import {TextContentPipe} from '../../../../pipes/text-content-pipe';

@Component({
  selector: 'bb-monaco-section',
  imports: [
    ImageView,
    TextView,
    TextContentPipe
  ],
  templateUrl: './monaco-section.html',
  styleUrl: './monaco-section.scss',
})
export class MonacoSection {

}
