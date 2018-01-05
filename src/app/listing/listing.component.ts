import { Component, OnInit, Input } from '@angular/core';
import { RestaurantApiService } from '../restaurant-api.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  @Input() newRestaurant;

  constructor(public restaurantServ : RestaurantApiService) { 
  
  }

  restaurants =[]

  selectedRestaurant;

  moreinfo(restaurant){
    alert(restaurant)
    this.selectedRestaurant=restaurant;
  }

  ngOnInit(){
    this.restaurantServ.getRestaurants().subscribe(data=>{
      //console.log(data);
      this.restaurants=data
      
  });

}
