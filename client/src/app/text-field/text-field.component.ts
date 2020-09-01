import { Component, OnInit, Input, Injectable } from '@angular/core';
import { MDCTextField } from '@material/textfield';
import { TextFieldService } from '../text-field.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
@Injectable()
export class TextFieldComponent implements OnInit {
  @Input() name: any;
  getall: any;

  // textfield = new MDCTextField(document.querySelector('.mdc-text-field'));
 

  constructor(
    private textFieldService: TextFieldService,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  onKey(event){
    console.log(event.target.value);
  }

  getAll(){
    this.apiService.getAllText().subscribe(respone => this.getall = respone)
  }

}