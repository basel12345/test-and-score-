import { Component } from '@angular/core';
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

  constructor(public themeModeService: ThemeModeService) {}
}
