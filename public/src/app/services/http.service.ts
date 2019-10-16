import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getAds() {
    return this._http.get('/ad');
  }
  newAd(form: any) {
    console.log('right before sending the data to database inside service')
    return this._http.post('/ad/new/5d9f781ca4d76379e0290762', form);
  }

}