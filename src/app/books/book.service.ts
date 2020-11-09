import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { IBook } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl = 'https://asmlibraryapi.azurewebsites.net/books';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient,
              private router: Router) { }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.bookUrl)
      .pipe(        
        catchError(this.handleError)
      );
  }

  getBook(id: string): Observable<IBook | undefined> {
    return this.http.get<IBook>(`${ this.bookUrl }/${ id }`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createBook(book: IBook) : void {
    this.http.post(this.bookUrl, book, this.httpOptions)      
      .subscribe(  
        next => this.handleNext(),          
        catchError(this.handleError)        
      );
  }

  updateBook(book: IBook) : void {        
    this.http.put(`${ this.bookUrl }/${ book.id }`, book, this.httpOptions)
      .subscribe(    
        next => this.handleNext(),        
        catchError(this.handleError)        
      );
  }

  removeBook(id: string) : void {
    this.http.delete(`${ this.bookUrl }/${ id }`)
      .subscribe(        
        catchError(this.handleError)
      );
  }

  private handleNext() : void { 
    this.router.navigate(['/books']);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {    
    
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {      
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {      
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
