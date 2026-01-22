import {Pipe, PipeTransform} from '@angular/core';
import {TextContentService} from '../service/text-content-service';

@Pipe({
  name: 'textContent',
})
export class TextContentPipe implements PipeTransform {
  constructor(private contentService: TextContentService) {
  }

  transform(path: string): string {
    return this.contentService.getString(path);
  }

}
