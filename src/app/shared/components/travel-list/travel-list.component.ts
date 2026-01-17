
import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITravel } from '../../model/travel';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { GetConfirmedComponent } from '../get-confirmed/get-confirmed.component';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})

export class TravelListComponent implements OnInit   {
 scrollPosition =0
@Output() emitEditTravel : EventEmitter<ITravel>= new EventEmitter<ITravel>()
 @Input() travelInfo !: ITravel[]
  constructor(private _matDialog : MatDialog) { }

  ngOnInit(): void {
  }

 
  @Output() removeId:EventEmitter<number> = new EventEmitter<number>() ;

  onMemoryRemove(t:ITravel){
    let matConfig= new MatDialogConfig()
    matConfig.width='500px'
    matConfig.data = `Are you sure ,yo want to remove this memory with Id ${t.id}`
    matConfig.disableClose=true;
    let matDialogRef = this._matDialog.open(GetConfirmedComponent,matConfig)
    matDialogRef.afterClosed()
      .subscribe(flag=>{
        if(flag){
          this.removeId.emit(t.id)
        }
      })
    
  }

  trackByTravel(index: number, item: any) {
  return item.id;
  }
onEdit(travel: ITravel){
  this.emitEditTravel.emit(travel)
}


}
