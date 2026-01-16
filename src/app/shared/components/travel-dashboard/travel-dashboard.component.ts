import { Component, OnInit } from '@angular/core';
import { ITravel } from '../../model/travel';
import { TRAVEL_MEMORIES } from '../../const/travel';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-travel-dashboard',
  templateUrl: './travel-dashboard.component.html',
  styleUrls: ['./travel-dashboard.component.scss']
})
export class TravelDashboardComponent implements OnInit {

  constructor(private snackBar:SnackBarService) { }

  ngOnInit(): void {
  }

  travelArr : Array<ITravel> = TRAVEL_MEMORIES

  getNewMemory(travel : ITravel){

    this.travelArr.push(travel)

  }

  getRemoveId(id:number){
    let getIndex = this.travelArr.findIndex(t=>t.id === id)
    this.travelArr.splice(getIndex,1)
    this.snackBar.showSuccessMsg(`The memory with id ${id} is removed successfully..!`)
  }
}
