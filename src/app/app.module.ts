import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweryListingComponent } from './brewery-listing/brewery-listing.component';
import { BreweryListingItemsComponent } from './brewery-listing-items/brewery-listing-items.component';
import { BrewerySearchFormComponent } from './brewery-search-form/brewery-search-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { BrewsIndexComponent } from './brews-index/brews-index.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweryListingComponent,
    BreweryListingItemsComponent,
    BrewerySearchFormComponent,
    SearchResultsComponent,
    BrewsIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
