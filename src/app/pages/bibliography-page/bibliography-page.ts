import { Component } from '@angular/core';
import { TextView } from "../../components/text-view/text-view";
import { TextContentPipe } from '../../pipes/text-content-pipe';
import { LinkifyPipe } from '../../pipes/linkify-pipe';

@Component({
  selector: 'bb-bibliography-page',
  imports: [
    TextView,
    TextContentPipe,
    LinkifyPipe,
  ],
  templateUrl: './bibliography-page.html',
  styleUrl: './bibliography-page.scss',
})
export class BibliographyPage {

}
