import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { PaginationComponent } from '../../../components/pagination/pagination.component';
import { TableComponent } from '../../../components/table/table.component';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TabsModule, PaginationComponent, TableComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  isFilter: boolean = false;
  title: string = 'Full Speaking Test Progress';
  allItems: any[] = [
    {
      test: 'Test 1',
      part1: '7.0',
      part2: '7.0',
      part3: '7.0',
      score: '7.0',
      status: 'Compeleted',
      practice: 'Practice'
    },
    {
      test: 'Test 1',
      part1: '7.0',
      part2: '7.0',
      part3: '7.0',
      score: '7.0',
      status: 'Incomplete',
      practice: 'Practice'
    },
    {
      test: 'Test 1',
      part1: '7.0',
      part2: '7.0',
      part3: '7.0',
      score: '7.0',
      status: 'In Progress',
      practice: 'Practice'
    },
    {
      test: 'Test 1',
      part1: '7.0',
      part2: '7.0',
      part3: '7.0',
      score: '7.0',
      status: 'In Progress',
      practice: 'Practice'
    },
    {
      test: 'Test 1',
      part1: '7.0',
      part2: '7.0',
      part3: '7.0',
      score: '7.0',
      status: 'In Progress',
      practice: 'Practice'
    },
    {
      test: 'Test 1',
      part1: '7.0',
      part2: '7.0',
      part3: '7.0',
      score: '7.0',
      status: 'In Progress',
      practice: 'Practice'
    },
    {
      test: 'Test 1',
      part1: '7.0',
      part2: '7.0',
      part3: '7.0',
      score: '7.0',
      status: 'In Progress',
      practice: 'Practice'
    },
    {
      test: 'Test 1',
      part1: '7.0',
      part2: '7.0',
      part3: '7.0',
      score: '7.0',
      status: 'In Progress',
      practice: 'Practice'
    },
    {
      test: 'Test 1',
      part1: '7.0',
      part2: '7.0',
      part3: '7.0',
      score: '7.0',
      status: 'In Progress',
      practice: 'Practice'
    },
    {
      test: 'Test 1',
      part1: '7.0',
      part2: '7.0',
      part3: '7.0',
      score: '7.0',
      status: 'In Progress',
      practice: 'Practice'
    },
    {
      test: 'Test 1',
      part1: '7.0',
      part2: '7.0',
      part3: '7.0',
      score: '7.0',
      status: 'In Progress',
      practice: 'Practice'
    },
    {
      test: 'Test 1',
      part1: '7.0',
      part2: '7.0',
      part3: '7.0',
      score: '7.0',
      status: 'In Progress',
      practice: 'Practice'
    }
  ]
  items: any[] = [];
  @ViewChild('menuDiv') menuDiv!: ElementRef;
  @ViewChild('menuBtn') menuBtn!: ElementRef;
  statusFilter!: string;
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.menuDiv?.nativeElement.contains(event.target);
    const clickedBtn = this.menuBtn?.nativeElement.contains(event.target);
    if (!clickedInside && !clickedBtn) {
      this.isFilter = false;
    }
  }


  ngOnInit(): void {
    this.items = this.allItems.map(res => res);
  }

  ngAfterViewInit(): void {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  filter(search: string) {
    this.statusFilter = search;
    this.items = this.allItems.filter(res => res.status === search);
    this.isFilter = false;
  }

  removeFilter() {
    this.statusFilter = "";
    this.items = this.allItems.filter(res => res);
  }
}
