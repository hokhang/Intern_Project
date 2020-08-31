import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';
import { student } from './student.inf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  getall: student;
  getone: student;
  // @Input() id = 1711680;
  values = '';

  constructor(
    private apiService: ApiService,
  ){}

  ngOnInit(): void {
    // this.getAll();
    // this.getOne();
  }

  // getAll(){
  //   this.apiService.getAllStudent().subscribe(respone => this.getall = respone)
  // }

  // getOne(){
  //   this.apiService.getOneStudent(this.id).subscribe(respone => this.getone = respone)
  // }
}
