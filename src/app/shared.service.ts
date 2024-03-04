import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiUrl = 'http://localhost:5107/api';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    // Replace 'your_endpoint' with the actual endpoint
    return this.http.get<any>(`${this.apiUrl}/User`).pipe(
      tap((data) => console.log('Success:', data)),
      catchError((error) => {
        console.error('Error:', error);
        throw error;
      })
    );
  }

}
