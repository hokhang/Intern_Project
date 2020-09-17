import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  am = [
    {email_address: "hokhang99er@gmail.com",
    first_name: "Khang",
    gender: "Male",
    id: 1,
    last_name: "Ho Bao",
    personal_id: 321780581,
    phone_number: 855389776,
    student_id: 1711680}
  ];
  id:any;
  first_name: any
  last_name: any
  gender: any
  student_id: any
  personal_id: any
  email_address: any
  phone_number: any
  displayedColumns = ['id', 'first_name', 'last_name', 'gender', 'student_id', 'personal_id', 'email_address', 'phone_number']

}
