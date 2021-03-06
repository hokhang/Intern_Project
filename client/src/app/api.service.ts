import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { student } from './student.inf';
import {} from '@angular/compiler'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  baseurl = 'http://localhost:3000';
    httpOptions = {
      header: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    } 

    async getAllText(): Promise<any> {
      let data = await this.httpClient.get<any>(this.baseurl + '/page/name?keyword=insert').toPromise();
      return data;
    }

    async postData(data: any): Promise<any> {
      let _data = await this.httpClient.post<any>(this.baseurl + '/data-input', data).toPromise();
      return _data;
    }

    async getAllData(): Promise<any> {
      let data = await this.httpClient.get<any>(this.baseurl + '/load-data').toPromise()
      //console.log(data)
      return data;
    }

    // getOneStudent(id: any): Observable<student> {
    //   return this.httpClient.get<student> (this.baseurl + '/page/' + id);
    // }
  
}
