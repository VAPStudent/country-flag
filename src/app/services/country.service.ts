import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _httpClient: HttpClient) { }

  GetFlag(country: string) {
    //https://restcountries.com/v2/name/india

    return this._httpClient.get("https://restcountries.com/v2/name/" + country);
  }
}
