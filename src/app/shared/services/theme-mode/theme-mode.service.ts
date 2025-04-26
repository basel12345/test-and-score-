import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeService {
  isDarkMode: boolean = false;
  isBrowser!: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      console.log(localStorage.getItem('theme'));
      
      this.isDarkMode = localStorage.getItem('theme') === 'dark';
      this.toggleTheme(this.isDarkMode);
    }
  }

  toggleTheme(theme: boolean) {
    this.isDarkMode = theme;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    if(this.isDarkMode) this.document.body.classList.add('dark-mode');
    else this.document.body.classList.remove('dark-mode');
  }
}
