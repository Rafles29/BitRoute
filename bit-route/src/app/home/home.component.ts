import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public map: any = { lat: 52.109139, lng: 20.621528 };

  constructor() { }

  ngOnInit() {
  }

}
