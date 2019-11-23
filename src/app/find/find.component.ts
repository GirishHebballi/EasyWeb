import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  pageDetails: any = {
    pageTitle: "Laptops",
    findDisplayFields: ['name', 'model'],
    groups: [{
         
        groupName: "Laptop Details",
        fields : [
          {
            dbName: "name",
            label: "Name",
            type: "TEXT",
            maxlength: "",
            minlength: "",
            tooltip: "",
            placeholder: "",
            validationErrorMessage: "",
            pattern: "",
            mandatory: "",
            dropdown: [],
            readOnlyInUpdate: "false",
            visibleInUpdate: "true",
            isPrimaryKey: "true"
          },
          {
            dbName: "model",
            label: "Model",
            type: "TEXT",
            maxlength: "",
            minlength: "",
            tooltip: "",
            placeholder: "",
            validationErrorMessage: "",
            pattern: "",
            mandatory: "",
            dropdown: [],
            readOnlyInUpdate: "false",
            visibleInUpdate: "true",
            isPrimaryKey: "false"
          }
        ]}, {
      
        groupName: "Laptop Configuration",
        fields: [
          {
            dbName: "cpu",
            label: "CPU",
            type: "TEXT",
            maxlength: "",
            minlength: "",
            tooltip: "",
            placeholder: "",
            validationErrorMessage: "",
            pattern: "",
            mandatory: "",
            dropdown: [],
            readOnlyInUpdate: "false",
            visibleInUpdate: "true",
            isPrimaryKey: "false"
          },
          {
            dbName: "memory",
            label: "Memory",
            type: "TEXT",
            maxlength: "",
            minlength: "",
            tooltip: "",
            placeholder: "",
            validationErrorMessage: "",
            pattern: "",
            mandatory: "",
            dropdown: [],
            readOnlyInUpdate: "false",
            visibleInUpdate: "true",
            isPrimaryKey: "false"
          },
          {
            dbName: "harddisk",
            label: "Hard Disk",
            type: "TEXT",
            maxlength: "",
            minlength: "",
            tooltip: "",
            placeholder: "",
            validationErrorMessage: "",
            pattern: "",
            mandatory: "",
            dropdown: [],
            readOnlyInUpdate: "false",
            visibleInUpdate: "true",
            isPrimaryKey: "false"
          }
        ]
      }
      ]
    
  };

  findListFields: any = this.pageDetails.findDisplayFields;
  constructor() { 
    console.log(this.findListFields)
  }

  ngOnInit() {
  }

}
