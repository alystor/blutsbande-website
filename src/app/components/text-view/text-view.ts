import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'bb-text-view',
  imports: [
    NgClass
  ],
  templateUrl: './text-view.html',
  styleUrl: './text-view.scss',
})
export class TextView {

  @Input() color: string = "bb-scarlett"
  @Input() size: "page-title" | "page-sub-title" | "text" = "text"

  private classDictionary(): { [key: string]: string[] } {
    return {
      "page-title": ["font-black", "text-[6vw]"],
      "page-sub-title": ["text-[4.1vw]"],
      "text": ["text-[1.65vw] leading-[2.15vw]" ],
    }
  }

  protected getClasses(): string[] {
    const classes = this.classDictionary()[this.size] || [];
    classes.push("text-" + this.color);
    return classes;
  }

}
