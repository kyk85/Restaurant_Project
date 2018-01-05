import { Component, OnInit, Input } from '@angular/core';
import { RestaurantApiService } from '../restaurant-api.service';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css']
})
export class MoreinfoComponent implements OnInit {
  @Input() newRestaurant;

  constructor(public restaurantServ : RestaurantApiService) { 
  
  }

  restaurants = []

  ngOnInit(){
    this.restaurantServ.getRestaurants().subscribe(data=>{
      //console.log(data);
      this.restaurants=data
      
  });

}
