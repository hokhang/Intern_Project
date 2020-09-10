import { Component, OnInit, Input } from '@angular/core';
import {MDCTopAppBar} from '@material/top-app-bar';

// Instantiation
// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);



@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() name;
  constructor() { }

  ngOnInit(): void {
  }

}
