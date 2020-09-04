import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dominos',
  templateUrl: './menu-dominos.component.html',
  styleUrls: ['./menu-dominos.component.css']
})
export class MenuDominosComponent implements OnInit {

  restoName = "Domino's Pizza";

  menuList = [
    { title: ' Indi Chicken Tikka', price: 'Rs.305' },
    { title: 'Indi Tandoori Paneer', price: 'Rs.235' },
    { title: ' Margherita', price: 'Rs.99' },
    { title: 'Veggie Paradise', price: 'Rs.215' },
    { title: ' Non Veg Supreme', price: 'Rs.305' },
    { title: ' Non Veg Loaded', price: 'Rs.155' },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
