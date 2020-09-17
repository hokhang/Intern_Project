import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  private data = new Subject()
  current_data = this.data.asObservable();

  onClick(data?: any){
    this.data.next(data)
  }

}
