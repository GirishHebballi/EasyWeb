import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-configure-new-page",
  templateUrl: "./configure-new-page.component.html",
  styleUrls: ["./configure-new-page.component.css"]
})
export class ConfigureNewPageComponent implements OnInit {
  addPageFormGroup: FormGroup;

  get groups(): FormArray {
    return <FormArray>this.addPageFormGroup.get("groups");
  }

  get fields(): FormArray {
    return <FormArray>this.groups.get("fields");
  }

  constructor(private pageFormBuilder: FormBuilder) {}

  ngOnInit() {
    this.addPageFormGroup = this.pageFormBuilder.group({
      pageTitle: ['', [Validators.required]],
      dbTable: ['', [Validators.required]],
      fieldsInBothTiles: false,
      groups: this.pageFormBuilder.array([this.buildGroups()])
    });
  }

  addGroups(): void {
    this.groups.push(this.buildGroups());
    console.log(this.groups.controls[0].get("fields"));

  }

  
  addFields(i): void {
    console.log(i);
    console.log(this.groups[i]);
    
    (<FormArray>this.groups.controls[i].get("fields")).push(this.buildFields());
  }
  buildValidator(): FormGroup {
    return this.pageFormBuilder.group({
      value: '',
      min: '',
      max: '',
      maxLength: '',
      minLength: '',
      validationErrorMessage: '',
      pattern: '',
      email: false,
      required: false
    });
  }
  buildFields(): FormGroup {
    return this.pageFormBuilder.group({
      dbName: ['', [Validators.required]],
      dbType: ['', [Validators.required]],
      dbConstraint: '',
      validators: this.buildValidator(),
      label: [''],
      type: ['', [Validators.required]],
      hint: '',
      dropdown: '',
      readOnlyInUpdate: false,
      visibleInUpdate: true
    });
  }

  buildGroups(): FormGroup {
    return this.pageFormBuilder.group({
      groupName: '',
      fields: this.pageFormBuilder.array([this.buildFields()])
    });
  }

  printLogs(grp) {
    console.log(grp);
  }
}
