import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweryListingComponent } from './brewery-listing/brewery-listing.component';
import { BreweryListingItemsComponent } from './brewery-listing-items/brewery-listing-items.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweryListingComponent,
    BreweryListingItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
