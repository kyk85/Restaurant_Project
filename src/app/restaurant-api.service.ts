import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantApiService {

  constructor(public http: Http) {
    
  }

  getRestaurants(){
    return this.http.get("https://quiet-citadel-87837.herokuapp.com/restaurants")
    .map ((res: Response) => res.json())
  }

}
