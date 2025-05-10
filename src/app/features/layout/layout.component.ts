import { ThemeModeService } from './../../shared/services/theme-mode/theme-mode.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { SideBarService } from '../../shared/services/side-bar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SideBarComponent, RouterModule, NavBarComponent, FooterComponent, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit, OnDestroy {
  isMatch!: boolean;
  screenWidth!: number;
  private routerSub!: Subscription;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getScreenSize();
  }

  constructor(public sideBarService: SideBarService, public themeModeService: ThemeModeService, private router: Router) { }

  ngOnInit() {
    this.getScreenSize();
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.sideBarService.subMenu = false;
        this.sideBarService.openSideBar = false;
      }
    });
  }

  getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.sideBarService.subMenu = false;
  }

  ngOnDestroy(): void {
    if (this.routerSub) this.routerSub.unsubscribe();
  }


}
