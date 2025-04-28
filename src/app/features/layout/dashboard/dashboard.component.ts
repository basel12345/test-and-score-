import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { PaginationComponent } from '../../../components/pagination/pagination.component';
import { TableComponent } from '../../../components/table/table.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TabsModule, PaginationComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isFilter: boolean = false;
  title: string = 'Full Speaking Test Progress';
  items: any[] = [
    {
      test: 'Test 1',
      part1: '7.0',
      part2: '7.0',
      part3: '7.0',
      score: '7.0',
      status: 'Competed',
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
}
