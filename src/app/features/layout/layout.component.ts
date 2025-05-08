import { ThemeModeService } from './../../shared/services/theme-mode/theme-mode.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { SideBarService } from '../../shared/services/side-bar.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SideBarComponent, RouterModule, NavBarComponent, FooterComponent, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  isMatch!: boolean;
  screenWidth!: number;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getScreenSize();
  }

  constructor(public sideBarService: SideBarService, public themeModeService: ThemeModeService) { }

  ngOnInit() {
    this.getScreenSize();
  }
  
  getScreenSize() {
    this.screenWidth = window.innerWidth;
  }
}
