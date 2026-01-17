import { Component, OnInit } from '@angular/core';
import { ITravel } from '../../model/travel';
import { TRAVEL_MEMORIES } from '../../const/travel';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-travel-dashboard',
  templateUrl: './travel-dashboard.component.html',
  styleUrls: ['./travel-dashboard.component.scss']
})
export class TravelDashboardComponent implements OnInit {

  constructor(private snackBar:SnackBarService,
    private _snackbar : MatSnackBar
  ) { }
editTravelInfo !:ITravel
  

  ngOnInit(): void {
  }

  travelArr : Array<ITravel> = TRAVEL_MEMORIES

  getNewMemory(travel : ITravel){

    this.travelArr.unshift(travel)

  }

  getRemoveId(id:number){
    let getIndex = this.travelArr.findIndex(t=>t.id === id)
    this.travelArr.splice(getIndex,1)
    this.snackBar.showSuccessMsg(`The memory with id ${id} is removed successfully..!`)
  }
  getEditTravel(eve : ITravel){
    this.editTravelInfo = eve
    console.log(eve)
    this._snackbar.open(`The travelForm eithid ${eve.id} is patch successfuly ` , 'close' ,{
      horizontalPosition: 'center',
      verticalPosition : 'top',
      duration: 2000

    })
    
   
  }
 getUpdatedTravelInfo(travelInfo:ITravel ){
   let getIndex = this.travelArr.findIndex(t=>t.id === travelInfo.id);
   this.travelArr[getIndex] = travelInfo
   this._snackbar.open(`The travelForm eithid ${travelInfo.id} is Updated successfuly ` , 'close' ,{
      horizontalPosition: 'center',
      verticalPosition : 'top',
      duration: 2000

    })
    
 
  
 }
}
