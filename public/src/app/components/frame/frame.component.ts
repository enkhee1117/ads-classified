import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  ads: any;
  newAdForm: any;
  selectedAd: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAds();
    this.newAdForm = {category: "", text: ""};
    this.selectedAd = '';
  }
  getAds() {
    const observable = this._httpService.getAds();
    observable.subscribe(data => {
      this.ads = data;
      return this.ads;
    });
  }
  click() {
    console.log('click has worked');
  }

  newAd() {
    console.log('new ad function is going through the component');
    const observable = this._httpService.newAd(this.newAdForm);
    observable.subscribe(data => console.log('"Got the data back from the service"', data));
    this.newAdForm = {category: '', text: ''};
  }

  selectAd(clickedAd) {
    this.selectedAd = clickedAd;
    console.log(this.selectedAd);
  }
}
