import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TextFieldService {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService,
  ) {}

  // private data;
  // share_data = this.data.asObservable();

  // shareData(){
  //   this.data.next(this.data);
  // }

}
