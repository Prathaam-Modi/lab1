import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tododetails',
  templateUrl: './tododetails.component.html',
  styleUrls: ['./tododetails.component.css']
})
export class TododetailsComponent implements OnInit {

  employeeDetails = [
    {id:1, name:'A',department:'CSE'},
    {id:2, name:'B',department:'ME'},
    {id:3, name:'C',department:'ECE'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
