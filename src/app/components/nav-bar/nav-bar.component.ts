import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeModeService } from '../../shared/services/theme-mode/theme-mode.service';
import { SideBarService } from '../../shared/services/side-bar.service';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
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
  screenHeight!: number;
  screenWidth!: number;
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


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getScreenSize();
  }

  constructor(
    public themeModeService: ThemeModeService,
    private sidebarService: SideBarService
  ) { }


  ngOnInit() {
    this.getScreenSize();
  }

  changeLang(lang: string) {
    this.language = lang;
    this.isLang = false;
    if (lang === "AR") localStorage.setItem("dir", 'rtl');
    else localStorage.setItem("dir", 'ltr');
    location.reload();
  }

  selectNotification(notfication: string) {
    this.isNotFication = false;
    this.notfication = notfication;
  }


  getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  toogleSideBar() {
    this.sidebarService.openSideBar = !this.sidebarService.openSideBar;
    if (!this.sidebarService.openSideBar) this.sidebarService.subMenu = false;
  }
}
