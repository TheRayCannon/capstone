import { Injectable } from '@angular/core';
import { Brewery } from './models/Brewery';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


type BreweriesResponse = {
  breweries: Brewery[];
}

type BreweryResponse = {
  breweries: Brewery;
}

const breweryEndpoint = environment.baseApiUrl


@Injectable({
  providedIn: 'root'
})
export class BreweryService {

constructor(private http: HttpClient) {
}

fetchBreweries(){
  return this.http.get<BreweriesResponse>(environment.baseApiUrl)
}


addBreweries(brewery: Brewery){
  return this.http.post<BreweryResponse>(environment.baseApiUrl, brewery)
}

}
