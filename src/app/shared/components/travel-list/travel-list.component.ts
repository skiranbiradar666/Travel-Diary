import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITravel } from '../../model/travel';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit   {
 scrollPosition =0
@Output() emitEditTravel : EventEmitter<ITravel>= new EventEmitter<ITravel>()
 @Input() travelInfo !: ITravel[]
  constructor() { }

  ngOnInit(): void {
  }

onEdit(travel: ITravel){
  this.emitEditTravel.emit(travel)
}
trackById(index: number, t: ITravel) {
  return t.id;
}

}
