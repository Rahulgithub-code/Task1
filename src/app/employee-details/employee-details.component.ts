import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emp } from '../emp';
import { EmpRecordService } from '../emp-record.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() cIndex
  idField = true
  emp: Emp = new Emp()
  urlId;

  constructor(private _empService: EmpRecordService, private _actRoute: ActivatedRoute, private _location: Location, private _route: Router) {

  }

  ngOnInit(): void {
    this.urlId = this._actRoute.snapshot.params['id']
    if (this.urlId == 0) {
      this.idField = false
    }
    else if (this.urlId > 0) {
      //debugger
      for (let i of this._empService.EmpData) {
        if (i.id == this.urlId) {
          this.emp = i
        }
      }

    }
    else if (!this.urlId) {

      this.emp = this._empService.EmpData[this.cIndex]
    }
  }
  getData(formData: Emp) {
    if (this.urlId == 0) {
      debugger
      this._empService.pushData(formData);
      this._location.back()
    }
    else if (this.urlId > 0) {
      debugger
      let j: any = 0
      for (let i of this._empService.EmpData) {
        if (i.id == this.urlId) {
          formData['id']=this.emp.id
          this._empService.updateData(formData, j)
          this._route.navigate(['/employee_list'])
          return
        }
        else {
          j++
        }
      }
    }
    else if (!this.urlId) {
      debugger
      formData['id'] = this.emp.id
      this._empService.updateData(formData, this.cIndex)
    }
  }
}
