import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'linkify',
  standalone: true,
})
export class LinkifyPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (value == null || value === '') {
      return '';
    }

    const escaped = this.escapeHtml(value);
    const urlPattern = /https?:\/\/[^\s\[\]]*(?:\n[^\s\[\]]*)*/g;
    const withLinks = escaped.replace(urlPattern, (match) => {
      const urlOnly = match.replace(/\s+$/, '');
      const trailingWhitespace = match.slice(urlOnly.length);
      const href = urlOnly.replace(/\s+/g, '').trim();
      const linkHtml = `<a href="${this.escapeHtml(href)}" target="_blank" rel="noopener noreferrer" class="bb-link-in-text">${this.escapeHtml(urlOnly.trim())}</a>`;
      return linkHtml + trailingWhitespace;
    });

    return this.sanitizer.bypassSecurityTrustHtml(withLinks);
  }

  private escapeHtml(text: string): string {
    const el = document.createElement('div');
    el.textContent = text;
    return el.innerHTML;
  }
}
