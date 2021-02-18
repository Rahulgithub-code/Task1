import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpRecordService } from '../emp-record.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() cIndex

  //emp:Emp = new Emp()
  id;
  fname;
  lname;
  salary;
  department;

  constructor(private _empService:EmpRecordService) {
  }

  ngOnInit(): void {
    // this.emp['id']=this._empService.EmpData[this.cIndex].id
    // this.emp['fname']=this._empService.EmpData[this.cIndex].fname
    // this.emp['lname']=this._empService.EmpData[this.cIndex].lname
    // this.emp['salary']=this._empService.EmpData[this.cIndex].salary
   // this.emp=this._empService.EmpData[this.cIndex]
   this.id=this._empService.EmpData[this.cIndex].id
   this.fname=this._empService.EmpData[this.cIndex].fname
   this.lname=this._empService.EmpData[this.cIndex].lname
   this.salary=this._empService.EmpData[this.cIndex].salary
   this.department=this._empService.EmpData[this.cIndex].department

  }
  getData(formData:Emp){
    this._empService.updateData(formData,this.cIndex)
  }
  
}
