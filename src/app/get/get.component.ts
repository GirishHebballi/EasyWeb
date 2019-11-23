import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      lastCtrl: ['', Validators.required],
      emailCtrl: [''],
      passwordCtrl: [''],
      phoneCtrl: [''],
    });
    this.secondFormGroup = this._formBuilder.group({
      degreeCtrl: ['', Validators.required],
      collegeCtrl: ['']

    });
    this.thirdFormGroup = this._formBuilder.group({
      accomplishmentCtrl: ['']
    });
    this.fourFormGroup = this._formBuilder.group({
      fourCtrl: ['', Validators.required]
    });
  }

}
