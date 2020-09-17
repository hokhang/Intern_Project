import { Component, Input, OnInit } from '@angular/core';
import { CheckBoxService } from '../check-box/check-box.service';
import { TransferDataService } from '../service/transfer-data.service';
import { dataOfTextField } from '../text-field/interface/interface.dto';

interface Type{
  labelvalue?:string;
  key?:string;
}

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {
  @Input() data;
  labelPosition: Type[] = [];


  constructor(
    private transDataService: TransferDataService,
  ) { }

  ngOnInit(): void {
    this.labelPosition = this.data.value;
  }

  onClick(name:string){
    let data: dataOfTextField = {};
    // console.log(this.labelPosition)
    data.key = this.data.key;
    data.value = name;
    this.transDataService.shareData(data)
  }
 

}
