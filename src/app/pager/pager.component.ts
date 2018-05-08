import { StorageService } from './../storage.service';
import { Component, OnInit, HostListener, Output, Input } from '@angular/core';
import { UserService } from '../user.service';
import { EventEmitter } from '@angular/core';
import { Pager } from '../models/pager';

@Component({
  selector: 'pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent  {




  @Input('pager') pager: Pager;
  @Input('totalPagesRange') totalPagesRange: number[];
  @Output() click = new EventEmitter();
  paginationError: string;

  constructor(private service: UserService, private storage: StorageService) {

   }






  currentPage(currentPage): boolean {
    return (currentPage == this.pager.page);
  }

  goToPage(page: number) {
    console.log(this.pager.page);
    console.log(page);
    if (this.validatePage(page)) {
      this.pager.page = page;
      this.click.emit(null);
      this.paginationError = "";
    } else {
      this.paginationError = "This page is empty.";
    }
  }
  nextPage() {
    this.pager.page++;
    if (this.validatePage(this.pager.page)) {
      this.click.emit(null);
      this.paginationError = "";
    }
    else {
      this.pager.page--;
      this.paginationError = "Last page reached."
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event) {
    this.storage.setPager(this.pager);
  }

  ngOnDestroy(): void {
    this.storage.setPager(this.pager);
  }


  previousPage() {
    this.pager.page--;
    if (this.validatePage(this.pager.page)) {
      this.click.emit(null);
      this.paginationError = "";
    }
    else {
      this.pager.page++;
      this.paginationError = "First page reached.";
    }
  }

  validatePage(page: number): boolean {
    if (page >= this.totalPagesRange.length) return false;
    else if (page < 0) return false;
    else return true;
  }
}



 


