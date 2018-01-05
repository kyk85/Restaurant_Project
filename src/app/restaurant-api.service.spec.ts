import { TestBed, inject } from '@angular/core/testing';

import { RestaurantApiService } from './restaurant-api.service';

describe('RestaurantApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantApiService]
    });
  });

  it('should be created', inject([RestaurantApiService], (service: RestaurantApiService) => {
    expect(service).toBeTruthy();
  }));
});
