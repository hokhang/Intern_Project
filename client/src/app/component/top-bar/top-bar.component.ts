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
<<<<<<< HEAD
  @Input() data;
=======
  @Input() data
>>>>>>> ed4f6c3983fa7c1aabcf9b7f835a2b2ea4a03869
  constructor() { }

  ngOnInit(): void {
  }

}
