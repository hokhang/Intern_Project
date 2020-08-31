import { Component, OnInit, Input } from '@angular/core';
import { MDCRipple } from '@material/ripple';

//const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() name;
  constructor() { }

  ngOnInit(): void {
  }

}
