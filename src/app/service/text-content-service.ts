import {Injectable} from '@angular/core';
import {firstValueFrom} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TextContentService {

  private loadedTextData: any = {}

  constructor(private httpClient: HttpClient) {
  }

  async loadConfig() {
    this.loadedTextData = await firstValueFrom(this.httpClient.get('text-content.json'));
  }

  getString(path: string): string {
    const result = path.split('.').reduce((obj, key) => {
      return (obj && obj[key] !== undefined) ? obj[key] : undefined;
    }, this.loadedTextData);

    return result !== undefined ? result : `[Error: '${path}' not found]`;
  }

}
