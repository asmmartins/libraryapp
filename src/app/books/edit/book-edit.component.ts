import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IBook } from '../book';
import { BookService } from '../book.service';

@Component({  
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  pageTitle = 'Livro';
  errorMessage = '';
  book: IBook | undefined;  

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService) {
  }

  ngOnInit(): void {    
    const id = this.route.snapshot.paramMap.get('id');    
    if (id) {            
      this.getBook(id);      
    }
  }

  getBook(id: string): void {
    this.bookService.getBook(id).subscribe({
      next: book => this.book = book,
      error: err => this.errorMessage = err
    });
  }

  onSubmit(): void {        
    if (this.book) {                              
      this.bookService.updateBook(this.book);        
    }
  }

  remove(): void {        
    if (this.book) {                              
      this.bookService.removeBook(this.book.id);        
    }
  }

  onBack(): void {
    this.router.navigate(['/books']);
  }  
}
