import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() items: any[] = [];
  screenWidth!: number;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getScreenSize();
  }

  ngOnInit() {
    this.getScreenSize();
  }

  getScreenSize() {
    this.screenWidth = window.innerWidth;
  }
}
