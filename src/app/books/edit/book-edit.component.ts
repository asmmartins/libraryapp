import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IBook } from '../book';
import { IAuthor } from '../../authors/author';
import { ISubject } from '../../subjects/subject';

import { BookService } from '../book.service';
import { AuthorService } from '../../authors/author.service';
import { SubjectService } from '../../subjects/subject.service';


@Component({  
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  pageTitle = 'Livro';
  errorMessage = '';
  book: IBook | undefined;
  
  allAuthors: IAuthor[] = [];
  filteredAuthors: IAuthor[] = [];

  allSubjects: ISubject[] = [];
  filteredSubjects: ISubject[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService,
              private authorService: AuthorService,
              private subjectService: SubjectService) {
  }

  ngOnInit(): void {    
    const id = this.route.snapshot.paramMap.get('id');    
    if (id) {            
      this.getBook(id);         
    }
  }

  getBook(id: string): void {
    this.authorService.getAuthors().subscribe({
      next: authors => { 

        this.allAuthors = authors;  
        
        this.subjectService.getSubjects().subscribe({
          next: subjects =>  { 
            
            this.allSubjects = subjects;

            this.bookService.getBook(id).subscribe({
              next: book =>  { 

                this.book = book; 
                
                let totalAuthors = this.book.bookAuthors.length;                
                for(let i = 0; i < totalAuthors; i++)                 
                  this.filteredAuthors[i] = this.allAuthors.find((author: IAuthor) => author.id == this.book.bookAuthors[i]["authorId"]);

                let totalSubjects = this.book.bookSubjects.length;                
                for(let i = 0; i < totalSubjects; i++)                         
                  this.filteredSubjects[i] = this.allSubjects.find((subject: ISubject) => subject.id == this.book.bookSubjects[i]["subjectId"]);                                                
              },
              error: err => this.errorMessage = err
            });
          },
          error: err => this.errorMessage = err
        });        
      },
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

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }
}
