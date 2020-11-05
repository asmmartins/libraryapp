import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IAuthor } from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authorUrl = 'https://asmlibraryapi.azurewebsites.net/authors';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(this.authorUrl)
      .pipe(        
        catchError(this.handleError)
      );
  }

  getAuthor(id: string): Observable<IAuthor | undefined> {
    return this.http.get<IAuthor>(`${ this.authorUrl }/${ id }`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createAuthor(author: IAuthor) : void {
    this.http.post(this.authorUrl, author, this.httpOptions)      
      .subscribe(  
        next => this.handleNext(next),          
        catchError(this.handleError)        
      );
  }

  updateAuthor(author: IAuthor) : void {        
    this.http.put(`${ this.authorUrl }/${ author.id }`, author, this.httpOptions)
      .subscribe(    
        next => this.handleNext(next),
        catchError(this.handleError)
      );
  }

  removeAuthor(id: string) : void {
    this.http.delete(`${ this.authorUrl }/${ id }`)
      .subscribe(        
        catchError(this.handleError)
      );
  }

  private handleNext(next: object) : void { 
    this.getAuthors();   
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
