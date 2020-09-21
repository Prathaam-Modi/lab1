import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count:number=3;
  name:string='SMIT';

  listOfCars = ['BMW','Mercedes','Audi']
  
  increamentCounter(){
    this.count++;
  }
  decreamentCounter(){
    this.count--;
  }
}
