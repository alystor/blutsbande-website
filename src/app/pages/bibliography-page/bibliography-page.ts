import { Component } from '@angular/core';
import {TextView} from "../../components/text-view/text-view";
import {TextContentPipe} from '../../pipes/text-content-pipe';

@Component({
  selector: 'bb-bibliography-page',
  imports: [
    TextView,
    TextContentPipe
  ],
  templateUrl: './bibliography-page.html',
  styleUrl: './bibliography-page.scss',
})
export class BibliographyPage {

}
