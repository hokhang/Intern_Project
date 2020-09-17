import { Component, OnInit, Input } from '@angular/core';
import { MDCRipple } from '@material/ripple';
import { ButtonService } from '../button/button.service'

//const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() data;
  constructor(
    private buttonService: ButtonService,
  ) { }
  
  ngOnInit(): void {
  }

  onClick(){
    //check action in database to know this button;
    this.buttonService.onClick(this.data.action);
  }

}
