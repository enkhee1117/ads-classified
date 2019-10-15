import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  ads: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAds();
  }
  getAds() {
    const observable = this._httpService.getAds();
    observable.subscribe(data => {
      console.log(data);
      this.ads = data;
      return this.ads;
    });
  }
}
