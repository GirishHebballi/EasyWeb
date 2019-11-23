import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-type-table',
  templateUrl: './type-table.component.html',
  styleUrls: ['./type-table.component.css']
})
export class TypeTableComponent implements OnInit {
  displayedColumns: string[] = ['name','action'];
  dataSource: MatTableDataSource<string>;
  typeFormGroup: FormGroup;
  errorMessage: any = {};
  errorMsg:any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private typeFormBuilder: FormBuilder) {
    
    
    const typeList = ['TYPE_laptop', 'TYPE_MODELS', 'TYPE_DATA','TYPE_COLORS', 'TYPE_STRING', 'TYPE_XYZ'];
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(typeList);
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data: string, filter: string) => {
      console.log(data);
      console.log(filter);
      return data.search(filter) != -1;
     };

    console.log(this.dataSource.sort);
 
    this.typeFormGroup =  this.typeFormBuilder.group({
      typeName: ['', [Validators.pattern('^TYPE_[a-zA-Z_-]+$')]],
      typeValues: ''
    });


  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  deleteType(typeName) {
    console.log(typeName);
  }
  editType(typeName) {
    console.log(typeName);
  }
  validate(fieldName:any) {
    this.errorMessage[fieldName] = "";
    
    if (this.typeFormGroup.controls[fieldName].errors !== null) {
      console.log(Object.keys(this.typeFormGroup.controls[fieldName].errors));
      console.log(this.typeFormGroup);
      let errorList = new Array();
      errorList = Object.keys(this.typeFormGroup.controls[fieldName].errors);
      errorList.forEach(errorKey => {

        if(errorKey === "pattern") {
          const requiredValue = this.typeFormGroup.controls[fieldName].errors.pattern.requiredPattern;
          this.errorMsg ="The Pattern did not match, Allowed pattern is  :" + requiredValue;
        this.errorMessage[fieldName] = this.errorMsg;
        }
        console.log(this.errorMessage);
        
      });
      return true;
    }
    return false;
  }
  
}

