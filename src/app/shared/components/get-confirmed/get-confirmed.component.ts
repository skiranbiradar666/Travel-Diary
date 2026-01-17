import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Data } from '@angular/router';

@Component({
  selector: 'app-get-confirmed',
  templateUrl: './get-confirmed.component.html',
  styleUrls: ['./get-confirmed.component.scss']
})
export class GetConfirmedComponent implements OnInit {
getMsg!:string;
  constructor(private _matDialogRef:MatDialogRef<GetConfirmedComponent>,
             @Inject (MAT_DIALOG_DATA) msg: string
  ) { 
    this.getMsg = msg
  }

  ngOnInit(): void {
    
  }

  onClose(flag:boolean){
    this._matDialogRef.close(flag)
  }

}
