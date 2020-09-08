import { Component, OnInit, Input, Injectable } from '@angular/core';
import { MDCTextField } from '@material/textfield';
import { TextFieldService } from './text-field.service';
import { ApiService } from '../api.service';
import {dataOfTextField} from '../text-field/interface/interface.dto'


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
  ) {}

  ngOnInit(): void {
    
  }

  onKey(event){
    let data: dataOfTextField = {};
    data.key = this.name;
    data.value = event.target.value;
    this.textFieldService.shareData(data);
    // console.log(event);
  }


}