import { Component, OnInit } from '@angular/core';

import { IBook } from './book';
import { BookService } from './book.service';

@Component({
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  pageTitle = 'Livros';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
  }

  filteredBooks: IBook[] = [];
  books: IBook[] = [];

  constructor(private bookService: BookService) { }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Livros: ' + message;
  }

  performFilter(filterBy: string): IBook[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter((product: IBook) =>
      product.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: books => {
        this.books = books;
        this.filteredBooks = this.books;
      },
      error: err => this.errorMessage = err
    });
  }
}
