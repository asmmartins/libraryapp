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
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
