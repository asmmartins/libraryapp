import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IBook } from '../book';
import { BookService } from '../book.service';

@Component({  
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  pageTitle = 'Livro';
  errorMessage = '';
  book: IBook | undefined;  

  constructor(private router: Router,
              private bookService: BookService) {
  }

  ngOnInit(): void {  
    this.book = { "id": null, "title": null, "publishingCompany": null, "edition":0, "publicationYear": null, "price": 0 };  
  }  

  onSubmit(): void {        
    if (this.book) {                              
      this.bookService.createBook(this.book);        
    }
  }

  onBack(): void {
    this.router.navigate(['/books']);
  }  
}
