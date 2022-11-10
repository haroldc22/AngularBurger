import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public burgers: any = [
      {
        "nombre": "chicken burger, double cheese plus fries and coke",
        "precio": 18000,
        "descuento": "30%"
      },
      {
        "nombre": "chicken burger, double cheese plus fries and coke",
        "precio": 18000,
        "descuento": "20%"
      }
    ]
  constructor(){

   }

  ngOnInit(): void {

  }
}
