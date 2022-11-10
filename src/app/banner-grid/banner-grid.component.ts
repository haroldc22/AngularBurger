import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-grid',
  templateUrl: './banner-grid.component.html',
  styleUrls: ['./banner-grid.component.css']
})
export class BannerGridComponent implements OnInit {
  public burgers: any = [
    {
      "nombre": "Double meat burger with fries",
      "precio": 20000,
      "portada": "assets/img/banner/b1 (1).png"
    },
    {
      "nombre": "Double meat burger with fries",
      "precio": 19000,
      "portada": "assets/img/banner-grid/s1.png"
    },
    {
      "nombre": "Burger and cocacola",
      "precio": 15000,
      "portada": "assets/img/banner-grid/s2.png"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
