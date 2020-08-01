import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
 };

 apiUrl = 'http://52.66.203.99:3000/user/';
 paymentApi = 'http://52.83.204.66:5000/api/';
 
 constructor(
  private http: HttpClient, 
  private plt: Platform
 ) { }
 
 // Calling POST Method's 
   _postAPI(methodname:string, params: any): Observable<any> {
      return this.http.post<any>(this.apiUrl+methodname,params).pipe(
        tap(_ => 
          this.log(methodname)),
          catchError(this.handleError('login', []))
      );
    }

    // Calling GET Method's
    _getAPI(methodname:string): Observable<any> {
      return this.http.get<any>(this.apiUrl+ methodname + localStorage.getItem('employeeId'),this.httpOptions).pipe(
        tap(_ => this.log(methodname)),
        catchError(this.handleError('login', []))
      );
    }

  // Error Handling
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a Service message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
