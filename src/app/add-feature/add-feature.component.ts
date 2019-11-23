import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-feature",
  templateUrl: "./add-feature.component.html",
  styleUrls: ["./add-feature.component.css"]
})
export class AddFeatureComponent implements OnInit {
  pageDetails: any = {
    pageTitle: "Laptops",
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

  pageGroups: any = Object.keys(this.pageDetails.groups);
  constructor() {
    console.log("PAGEGROUPS");
    console.log(this.pageDetails.groups[0]);
  }

  ngOnInit() {}
}
