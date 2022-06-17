import { Injectable } from '@angular/core';
import { Brewery, CoBrewery } from './models/Brewery';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



type BreweriesResponse = {
  breweries: Brewery[];
}

type OpenBreweryDB =  {
  coBrews: CoBrewery[];
}

type BreweryResponse = {
  breweries: Brewery;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

const breweryEndpoint = environment.baseApiUrl



@Injectable({
  providedIn: 'root'
})
export class BreweryService {

constructor(private http: HttpClient) {
}

fetchColoradoBrews(){
  return this.http.get<CoBrewery[]>("https://api.openbrewerydb.org/breweries?by_state=colorado")
}

fetchBreweries(){
  return this.http.get<BreweriesResponse>(environment.baseApiUrl)
}


addBrewery(brewery: Brewery){
  return this.http.post<BreweryResponse>(environment.baseApiUrl, brewery)
}

search(searchName: string){
  return this.http.get<BreweriesResponse>(`${environment.baseApiUrl}/search?search=${searchName}`)
}

deleteBrewery(id: number){
  return this.http.delete<Brewery>(`${environment.baseApiUrl}/${id}`).subscribe()
}

editBrewery(updatedBrewery: Brewery) {
  return this.http.put(`${breweryEndpoint}/${updatedBrewery.id}`, updatedBrewery, httpOptions).subscribe()
}

}

