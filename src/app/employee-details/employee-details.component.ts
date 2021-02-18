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

  emp: Emp = new Emp()
  urlId;

  constructor(private _empService: EmpRecordService, private _actRoute: ActivatedRoute, private _location: Location, private _route: Router) {

  }

  ngOnInit(): void {
    this.urlId = this._actRoute.snapshot.params['id']
    if (this.urlId == 0) {
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

    this._route.navigate['/employee_list']


    if (this.urlId == 0) {
      this._empService.pushData(formData);
      this._location.back()
    }
    else {
      //debugger
      this._empService.updateData(formData, this.cIndex)
      this._route.navigate(['/employee_list'])
    }
  }

}
