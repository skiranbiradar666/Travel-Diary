import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITravel } from '../../model/travel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.scss']
})

export class TravelFormComponent implements OnInit, OnChanges {
 isinEditMode:boolean=false
 @Input() editTravel! : ITravel;
  @Output() emitUpdatedTravelInfo : EventEmitter<ITravel>= new EventEmitter<ITravel>()
  constructor(private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
  }



  @ViewChild('travelForm') travelForm !: NgForm

  @Output() emitNewMemory : EventEmitter<ITravel> = new EventEmitter<ITravel>()


  ngOnChanges(changes: SimpleChanges): void {
      if(!!changes['editTravel']['currentValue']){
        this.isinEditMode = true;
        this.travelForm.form.patchValue(changes['editTravel']['currentValue'])
      }
  }


onUpdate(){
  if(this.travelForm.valid){
   let UPDATED_OBJ : ITravel={ ...this.travelForm.value , id : this.editTravel.id

   }
  this.emitUpdatedTravelInfo.emit(UPDATED_OBJ)
  this.isinEditMode = false
  this.travelForm.reset()
  }
}
  onMemoryAdd(){
    if(this.travelForm.valid){
      let travel : ITravel = {
        ...this.travelForm.value,
        id : Date.now()
      }
      console.log(travel)
      this.travelForm.reset()
      this.emitNewMemory.emit(travel)

      this._snackBar.open('The new Travel-Memory added successfully !', 'close', {
        horizontalPosition : 'center',
        verticalPosition : 'top',
        duration : 3000
      })
    }
  }

}
