import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tododetails',
  templateUrl: './tododetails.component.html',
  styleUrls: ['./tododetails.component.css']
})
export class TododetailsComponent implements OnInit {

  employeeDetails = [
    {id:1, name:'A',department:'CSE',doj:"12th aug 2020"},
    {id:2, name:'B',department:'ME',doj:"7th aug 2018"},
    {id:3, name:'C',department:'ECE',doj:"15th aug 2019"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
