import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Node } from './models/node.model';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  private nodesUrl = 'api/nodes';

  constructor(
    private http: HttpClient,
  ) { }

  getNodes(): Observable<Node[]> {
    return this.http.get<Node[]>(this.nodesUrl)
      .pipe(
        catchError(this.handleError<Node[]>('getNode', []))
      );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
