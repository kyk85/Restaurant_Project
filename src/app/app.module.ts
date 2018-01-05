import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebheadComponent } from './webhead/webhead.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { HttpModule } from '@angular/http';
import { RestaurantApiService } from './restaurant-api.service';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';
import { ListingComponent } from './listing/listing.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WebheadComponent,
    SidenavComponent,
    MoreinfoComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [RestaurantApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
