import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITravel } from '../../model/travel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.scss']
})
export class TravelFormComponent implements OnInit {

  constructor(
    private _snackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('travelForm') travelForm !: NgForm

  @Output() emitNewMemory : EventEmitter<ITravel> = new EventEmitter<ITravel>()

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
