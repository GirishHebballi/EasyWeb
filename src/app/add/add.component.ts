import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  pageDetails: any = {
    pageTitle: "Laptops",
    groups: [{
         
        groupName: "Laptop Details",
        fields : [
          {
            dbName: "name",
            dbConstraint: "PRIMARY KEY NOT NULL",
            dbType: "TEXT",
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
            dbConstraint: "",
            dbType: "TEXT",
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
            dbConstraint: "",
            dbType: "TEXT",
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
            dbConstraint: "",
            dbType: "TEXT",
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
            dbConstraint: "",
            dbType: "TEXT",
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

  pageGroups: any = Object.keys(this.pageDetails.groups);
  constructor() { }

  ngOnInit() {
  }

}
