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
  @Input() hoverColor: string = this.color
  @Input() size: "page-title" | "page-sub-title" | "text" | "section-title" | "text-title" | "text-sub-title" | "text-foot-note" | "text-quote" | "text-menu" | "text-menu-link" | "custom" = "text"
  @Input() mode: "landscape" | "portrait" = "landscape"

  private classDictionary(): { [key: string]: string[] } {
    return {
      "page-title": ["font-black", "text-[6vw]"],
      "page-sub-title": ["text-[4.1vw]"],
      "text": ["text-[1.65vw] leading-[2.3vw]"],
      "section-title": ["text-[4.1vw] font-bold"],
      "text-title": ["text-[3.2vw] font-bold"],
      "text-sub-title": ["text-[1.9vw] font-semibold"],
      "text-foot-note": ["text-[1vw] leading-[1vw]"],
      "text-quote": ["text-[1.4vw]"],
      "text-menu": ["text-[4.2vw] font-bold"],
      "text-menu-link": ["text-[2vw]"],
      "custom": [""]
    }
  }

  private classDictionaryPortrait(): { [key: string]: string[] } {
    return {
      "page-title": ["font-black", "text-[5vh]"],
      "page-sub-title": ["text-[3.2vh]"],
      "text": ["text-[1.75vh] leading-[3vh]"],
      "section-title": ["text-[4.1vw] font-bold"],
      "text-title": ["text-[3.2vw] font-bold"],
      "text-sub-title": ["text-[1.9vw] font-semibold"],
      "text-foot-note": ["text-[1vw] leading-[1vw]"],
      "text-quote": ["text-[1.4vw]"],
      "text-menu": ["text-[5.2vh] font-bold"],
      "text-menu-link": ["text-[3.0vh]"],
      "custom": [""]
    }
  }

  protected getClasses(): string[] {
    const classes = this.mode == "landscape" ? this.classDictionary()[this.size] : this.classDictionaryPortrait()[this.size] || [];
    classes.push("text-" + this.color);
    classes.push("hover:text-" + this.color);
    return classes;
  }

}
