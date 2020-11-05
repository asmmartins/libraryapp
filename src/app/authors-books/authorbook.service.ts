import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IAuthorBook } from './authorbook';

@Injectable({
  providedIn: 'root'
})
export class AuthorBookService {

  private bookUrl = 'https://asmlibraryapi.azurewebsites.net/author-books';

  constructor(private http: HttpClient) { }

  getAuthorsBooks(): Observable<IAuthorBook[]> {
    return this.http.get<IAuthorBook[]>(this.bookUrl)
      .pipe(        
        catchError(this.handleError)
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
