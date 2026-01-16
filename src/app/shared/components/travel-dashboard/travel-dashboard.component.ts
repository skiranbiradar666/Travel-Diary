import { Component, OnInit } from '@angular/core';
import { ITravel } from '../../model/travel';
import { TRAVEL_MEMORIES } from '../../const/travel';

@Component({
  selector: 'app-travel-dashboard',
  templateUrl: './travel-dashboard.component.html',
  styleUrls: ['./travel-dashboard.component.scss']
})
export class TravelDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  travelArr : Array<ITravel> = TRAVEL_MEMORIES

  getNewMemory(travel : ITravel){

    this.travelArr.unshift(travel)

  }
}
