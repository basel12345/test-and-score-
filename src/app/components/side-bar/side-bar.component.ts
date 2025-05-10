import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeModeService } from '../../shared/services/theme-mode/theme-mode.service';
import { CommonModule } from '@angular/common';
import { SideBarService } from '../../shared/services/side-bar.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  @ViewChild('subMenuDiv') subMenuDiv!: ElementRef;
  @ViewChild('profileDiv') profileDiv!: ElementRef;

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    
    if (this.subMenuDiv && !this.subMenuDiv.nativeElement.contains(target) && this.profileDiv && !this.profileDiv.nativeElement.contains(target)) {
      console.log(!this.subMenuDiv.nativeElement.contains(target));
      this.sideBarService.subMenu = false;
    }
  }
  constructor(public themeModeService: ThemeModeService, public sideBarService: SideBarService) { }
}
