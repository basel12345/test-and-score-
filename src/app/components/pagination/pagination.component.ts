import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { ThemeModeService } from '../../shared/services/theme-mode/theme-mode.service';
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, SelectModule, FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  totalItems: number = 100;
  totalPages: number = Math.ceil(this.totalItems / 15);
  page: number = 0;
  index: number = 1;
  currentPage: number = 1;
  countPage: number = 10;
  countInPages: Array<number> = [10, 20, 30, 40, 50];

  constructor(public themeModeService: ThemeModeService) { }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  nextPage() {
    if (this.page !== this.totalPages - 3) {
      this.page = this.page + 1;
      this.index = this.index;
    } else if (this.index !== 3) {
      this.index = this.index + 1;
    }
    this.currentPage = this.currentPage + 1;
  }

  firstPage() {
    this.page = 0;
    this.index = 1;
    this.currentPage = 1;
  }

  setPage(page: number) {
    if (page === this.totalPages) {
      this.index = 3;
      this.page = this.totalPages - 3;
    } else {
      this.index = page;
    }
    this.currentPage = page;
  }

  previousPage() {
    if (this.page !== 0 && this.index == 1) {
      this.page = this.page - 1;
      this.index = 1;
    } else if (this.index > 0) {
      this.index = this.index - 1;
    }
    this.currentPage = this.currentPage - 1;
  }

  lastPage() {
    this.page = this.totalPages - 3;
    this.index = 3;
    this.currentPage = this.totalPages;
  }
}
