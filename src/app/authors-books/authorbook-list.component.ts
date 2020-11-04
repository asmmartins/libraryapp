import { Component, OnInit } from '@angular/core';

import { IAuthorBook } from './authorbook';
import { AuthorBookService } from './authorbook.service';

@Component({
  templateUrl: './authorbook-list.component.html',
  styleUrls: ['./authorbook-list.component.css']
})
export class AuthorBookListComponent implements OnInit {

  pageTitle = 'Livros por Autor';
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
    this.filteredAuthorBooks = this.listFilter ? this.performFilter(this.listFilter) : this.authorbooks;
  }

  filteredAuthorBooks: IAuthorBook[] = [];
  authorbooks: IAuthorBook[] = [];

  constructor(private authorBookService: AuthorBookService) { }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Livros por Autor: ' + message;
  }

  performFilter(filterBy: string): IAuthorBook[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.authorbooks.filter((authorBook: IAuthorBook) =>
      authorBook.authorId.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.authorBookService.getAuthorsBooks().subscribe({
      next: authorbooks => {
        this.authorbooks = authorbooks;
        this.filteredAuthorBooks = this.authorbooks;
      },
      error: err => this.errorMessage = err
    });
  }
}
