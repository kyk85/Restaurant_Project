import { Component, OnInit } from '@angular/core';
import { RestaurantApiService } from './restaurant-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor (public restaurantServ : RestaurantApiService ) {}

  ngOnInit(){
    this.restaurantServ.getRestaurants().subscribe(data=>{
      console.log(data);
      
    });
  }
}
