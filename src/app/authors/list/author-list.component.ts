import { Component, OnInit } from '@angular/core';

import { IAuthor } from '../author';
import { AuthorService } from '../author.service';

@Component({
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  pageTitle = 'Autores';
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
    this.filteredAuthors = this.listFilter ? this.performFilter(this.listFilter) : this.authors;
  }

  filteredAuthors: IAuthor[] = [];
  authors: IAuthor[] = [];

  constructor(private authorService: AuthorService) { }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Autores: ' + message;
  }

  performFilter(filterBy: string): IAuthor[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.authors.filter((author: IAuthor) =>
      author.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe({
      next: authors => {
        this.authors = authors;
        this.filteredAuthors = this.authors;
      },
      error: err => this.errorMessage = err
    });
  }
}
