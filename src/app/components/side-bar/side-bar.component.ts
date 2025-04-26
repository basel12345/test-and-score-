import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeModeService } from '../../shared/services/theme-mode/theme-mode.service';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  constructor(public themeModeService: ThemeModeService) {}
}
