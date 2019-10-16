import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ad-delete',
  templateUrl: './ad-delete.component.html',
  styleUrls: ['./ad-delete.component.css']
})
export class AdDeleteComponent implements OnInit {
  @Input() adToDelete: any;
  constructor() { }

  ngOnInit() {
  }

}
