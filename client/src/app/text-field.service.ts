import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { ApiService } from './api.service'

@Injectable({
  providedIn: 'root'
})
export class TextFieldService {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService,
  ) {}

}
