import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TextFieldService {
  add = [];
  // list: Array<{add: string}> = [];
  constructor(
    private httpClient: HttpClient,
  ) {}

  addToFirstName(name): Observable<any>{
    this.add.push(name);
  }
}
