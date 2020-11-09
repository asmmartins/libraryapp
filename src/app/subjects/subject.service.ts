import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { ISubject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjectUrl = 'https://asmlibraryapi.azurewebsites.net/subjects';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient, private router: Router) { }

  getSubjects(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(this.subjectUrl)
      .pipe(        
        catchError(this.handleError)
      );
  }

  getSubject(id: string): Observable<ISubject | undefined> {
    return this.getSubjects()
      .pipe(
        map((subjects: ISubject[]) => subjects.find(p => p.id === id))
      );
  }

  createSubject(subject: ISubject) : void {
    this.http.post(this.subjectUrl, subject, this.httpOptions)      
      .subscribe(  
        next => this.handleNext(),          
        catchError(this.handleError)        
      );
  }

  updateSubject(subject: ISubject) : void {        
    this.http.put(`${ this.subjectUrl }/${ subject.id }`, subject, this.httpOptions)
      .subscribe(    
        next => this.handleNext(),        
        catchError(this.handleError)        
      );
  }

  removeSubject(id: string) : void {
    this.http.delete(`${ this.subjectUrl }/${ id }`)
      .subscribe(        
        next => this.handleNext(),      
        catchError(this.handleError)
      );
  }

  private handleNext() : void { 
    this.router.navigate(['/subjects']);
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
