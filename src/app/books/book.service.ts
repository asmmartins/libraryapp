import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IBook } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl = 'https://asmlibraryapi.azurewebsites.net/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.bookUrl)
      .pipe(        
        catchError(this.handleError)
      );
  }

  getBook(id: string): Observable<IBook | undefined> {
    return this.getBooks()
      .pipe(
        map((books: IBook[]) => books.find(p => p.id === id))
      );
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
