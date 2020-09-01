import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { TextFieldService } from '../text-field.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private textFieldService: TextFieldService,
  ) { 
    // this.textFieldService.
  }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll() {
    let data = await this.apiService.getAllText().toPromise();
    console.log(data);
    return data;
  }

}
