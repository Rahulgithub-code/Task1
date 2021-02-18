import { Injectable } from '@angular/core';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpRecordService {

  EmpData:Emp[]=[
    {id: 1, fname: 'Rahul', lname:'Kumar', salary: 50000, department: 'CES' , toggle:0},
    {id: 5, fname: 'Vipul', lname:'Kumar', salary: 50000 , department: 'CES', toggle:0},
    {id: 6, fname: 'Nitu', lname:'Kumari', salary: 50000 , department: 'CES', toggle:0}
  ]
  constructor() { }
  pushData(data:Emp){
    data['toggle']=0
    this.EmpData.push(data)

  }
  updateData(data:Emp,index){
   data['toggle']=0
    this.EmpData.splice(index,1,data)
  }
}
