import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageResponseBookResponse } from 'src/app/services/models';
import { BookService } from 'src/app/services/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookResponse: PageResponseBookResponse = {};
  page = 0;
  size = 5;
  constructor(
    private bookService: BookService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.findAllBooks();
  }
  private findAllBooks() {
    this.bookService.findAllBooks({
      size: this.size,
      page: this.page
    }).subscribe({
      next: (books) => {
        this.bookResponse = books;
      }
    })
  }
}
