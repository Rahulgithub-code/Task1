import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpRecordService } from '../emp-record.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  pIndex;
  EmpDataC:Emp[];
  constructor(private _empSerivice: EmpRecordService) { }

  ngOnInit(): void {
    this.EmpDataC = this._empSerivice.EmpData
  }
  toggleOn(id,index){
    this.pIndex=index
    for(let row of this.EmpDataC){
      if(row.id==id){
        row.toggle=1
      }
      else{
        row.toggle=0
      }
    }
  }
  toggleOff(id){
    console.log(id)
    for(let row of this.EmpDataC){
      if(row.id==id){
        row.toggle=0
      }
    }
  }

}
