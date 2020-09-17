import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  private data = new Subject();
  public share_data = this.data.asObservable();
  constructor() { }
  
  shareData(data?:any){
    this.data.next(data);
  }
}
