import { Component, Input, OnInit } from '@angular/core';
import { ITravel } from '../../model/travel';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() travelInfo !: ITravel[]

}
