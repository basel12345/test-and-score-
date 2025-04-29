import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeModeService } from '../../shared/services/theme-mode/theme-mode.service';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  mode: boolean = true;
  isDarkMode: boolean = false;
  isBrowser!: boolean;
  isLang!: boolean;
  isNotFication!: boolean;
  language!: string;
  notfication!: string;
  @ViewChild('menuDivLang') menuDivLang!: ElementRef;
  @ViewChild('menuBtnLang') menuBtnLang!: ElementRef;
  @ViewChild('menuDivNotification') menuDivNotification!: ElementRef;
  @ViewChild('menuBtnNotification') menuBtnNotification!: ElementRef;
  statusFilter!: string;
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInsideLang = this.menuDivLang?.nativeElement.contains(event.target);
    const clickedBtnLang = this.menuBtnLang?.nativeElement.contains(event.target);
    if (!clickedInsideLang && !clickedBtnLang) {
      this.isLang = false;
    }

    const clickedInsideNotification = this.menuDivNotification?.nativeElement.contains(event.target);
    const clickedBtnNotification = this.menuBtnNotification?.nativeElement.contains(event.target);
    if (!clickedInsideNotification && !clickedBtnNotification) {
      this.isNotFication = false;
    }
  }
  constructor(public themeModeService: ThemeModeService) { }

  changeLang(lang: string) {
    this.language = lang;
    this.isLang = false;
  }

  selectNotification(notfication: string) {
    this.isNotFication = false;
    this.notfication = notfication;
  }
}
