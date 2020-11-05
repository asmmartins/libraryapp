import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { ISubject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjectUrl = 'https://asmlibraryapi.azurewebsites.net/subjects';

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(this.subjectUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getSubject(id: string): Observable<ISubject | undefined> {
    return this.getSubjects()
      .pipe(
        map((subjects: ISubject[]) => subjects.find(p => p.id === id))
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
