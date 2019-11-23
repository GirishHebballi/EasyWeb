import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-card-disaply",
  templateUrl: "./card-disaply.component.html",
  styleUrls: ["./card-disaply.component.css"]
})
export class CardDisaplyComponent implements OnInit {
  pageDetails: any = {
    pageTitle: "Laptops",
    dbTable: "laptop",
    fieldsInBothTiles: false,
    groups: [
      {
        groupName: "Laptop Details",
        fields: [
          {
            dbName: "name",
            label: "Name",
            type: "TEXT",
            validators: {
              value: "Lenovo",
              min: "2222",
              max: "23332",
              maxLength: 8,
              minLength: 4,
              validationErrorMessage: "",
              pattern: "",
              email: true,
              required: true
            },
            tooltip: "",
            hint: "",
            dropdown: [],
            readOnlyInUpdate: "false",
            visibleInUpdate: "true"
          },
          {
            dbName: "tile2name",
            label: "Tile 2 Name",
            type: "TEXT",
            validators: {
              value: "",
              min: "",
              max: "",
              maxLength: "",
              minLength: "",
              validationErrorMessage: "",
              pattern: "",
              email: "",
              required: ""
            },
            tooltip: "",
            hint: "",
            dropdown: [],
            readOnlyInUpdate: "false",
            visibleInUpdate: "true"
          },
          {
            dbName: "model",
            label: "Model",
            type: "SELECT",
            validators: {
              value: "",
              min: "",
              max: "",
              maxLength: "",
              minLength: "",
              validationErrorMessage: "",
              pattern: "",
              email: false,
              required: ""
            },
            tooltip: "",
            hint: "",
            dropdown: "TYPE_LAPTOPMODEL",
            readOnlyInUpdate: "false",
            visibleInUpdate: "true"
          },
          {
            dbName: "isLaptopEconomical",
            label: "Is Laptop Economical",
            type: "CHECKBOX",
            validators: {
              value: "",
              required: ""
            },
            hint: "",
            dropdown: "TYPE_LAPTOPMODEL",
            readOnlyInUpdate: "false",
            visibleInUpdate: "true"
          }
        ]
      },
      {
        groupName: "Laptop Configuration",
        fields: [
          {
            dbName: "color",
            label: "Color",
            type: "RADIO",
            validators: {
              value: "Green Color",
            },
            tooltip: "",
            hint: "Color should be Green , Red, Blue",
            dropdown: "TYPE_CPU",
            readOnlyInUpdate: "false",
            visibleInUpdate: "true"
          },
          {
            dbName: "hasWindows",
            label: "Has Windows OS",
            type: "TOGGLE",
            validators: {
              value: true,
            },
            tooltip: "",
            hint: "specifies if it has windows os",
            dropdown: "",
            readOnlyInUpdate: "false",
            visibleInUpdate: "true"
          },
          {
            dbName: "purchaseDate",
            label: "Purchase Date",
            type: "DATE",
            validators: {
              required: true
            },
            tooltip: "",
            hint: "Date of Purchase",
            dropdown: "TYPE_CPU",
            readOnlyInUpdate: "false",
            visibleInUpdate: "true"
          },
          {
            dbName: "memory",
            label: "Memory",
            type: "TEXT",
            validators: {
              value: "",
              min: "",
              max: "",
              maxLength: "",
              minLength: "",
              validationErrorMessage: "",
              pattern: "",
              email: false,
              required: ""
            },
            hint: "Memory would be 4GB, 8GB , 16GB",
            dropdown: [],
            readOnlyInUpdate: "false",
            visibleInUpdate: "true"
          },
          {
            dbName: "harddisk",
            label: "Hard Disk",
            type: "TEXT",
            validators: {
              value: "",
              min: "",
              max: "",
              maxlength: "",
              minLength: "",
              validationErrorMessage: "",
              pattern: "",
              email: false,
              required: ""
            },
            hint: "Hard Disk Size normally 500GB or 1TB",
            dropdown: [],
            readOnlyInUpdate: "false",
            visibleInUpdate: "true"
          }
        ]
      }
    ]
  };

  ezFormGroup: FormGroup;
  errorMessage: any = {};
  toppings = new FormControl();
  toppingList: string[] = [
    "Extra cheese",
    "Mushroom",
    "Onion",
    "Pepperoni",
    "Sausage",
    "Tomato"
  ];
  constructor(private _formBuilder: FormBuilder) {}

  generateFormBuilderGroupData() {
    let formBuilderGroup = {};

    this.pageDetails.groups.forEach(group => {
      group.fields.forEach(field => {
        let valueAndValidatorList = new Array();

        let validatorsList = new Array();

        if (field.hasOwnProperty("validators")) {
          const inputValidators = field.validators;
          if (
            inputValidators.hasOwnProperty("min") &&
            inputValidators["min"] != ""
          ) {
            validatorsList.push(Validators.min(inputValidators["min"]));
          }
          if (
            inputValidators.hasOwnProperty("max") &&
            inputValidators["max"] != ""
          ) {
            validatorsList.push(Validators.max(inputValidators["max"]));
          }
          if (
            inputValidators.hasOwnProperty("required") &&
            inputValidators["required"] != "" &&
            inputValidators["required"]
          ) {
            validatorsList.push(Validators.required);
          }
          if (
            inputValidators.hasOwnProperty("email") &&
            inputValidators["email"] != "" &&
            inputValidators["email"]
          ) {
            validatorsList.push(Validators.email);
          }
          if (
            inputValidators.hasOwnProperty("minLength") &&
            inputValidators["minLength"] != ""
          ) {
            validatorsList.push(
              Validators.minLength(inputValidators["minLength"])
            );
          }
          if (
            inputValidators.hasOwnProperty("maxLength") &&
            inputValidators["maxLength"] != ""
          ) {
            console.log(
              "adding the maxLength Validator" + inputValidators["maxLength"]
            );
            validatorsList.push(
              Validators.maxLength(inputValidators["maxLength"])
            );
          }
          if (
            inputValidators.hasOwnProperty("pattern") &&
            inputValidators["pattern"] != ""
          ) {
            validatorsList.push(Validators.pattern(inputValidators["pattern"]));
          }
          if (inputValidators.hasOwnProperty("value")) {
            valueAndValidatorList.push(inputValidators["value"]);
          } else {
            valueAndValidatorList.push("");
          }
          valueAndValidatorList.push(validatorsList);
        }
        formBuilderGroup[field.dbName] = valueAndValidatorList;
      });
    });

    console.log(formBuilderGroup);
    return formBuilderGroup;
  }
  ngOnInit() {
    let formBuilderGroupData = this.generateFormBuilderGroupData();

    this.ezFormGroup = this._formBuilder.group(formBuilderGroupData);
  }

  ToogleDisplay() {
    this.pageDetails.fieldsInBothTiles = !this.pageDetails.fieldsInBothTiles;
  }

  printFormCtrl() {
    console.log(this.ezFormGroup);
  }

  validate(fieldName) {
    this.errorMessage[fieldName] = "";
    //fromControl.getError();
    this.ezFormGroup.controls[fieldName];
    //console.log(this.ezFormGroup.controls[fieldName]);
    if (this.ezFormGroup.controls[fieldName].errors !== null) {
      console.log(Object.keys(this.ezFormGroup.controls[fieldName].errors));
      let errorList = new Array();
      errorList = Object.keys(this.ezFormGroup.controls[fieldName].errors);
      errorList.forEach(errorKey => {

        if(errorKey === "required") {
          this.errorMessage[fieldName] += fieldName + " is required. ";

        }
        if(errorKey === "minlength") {
          const requiredLeng = this.ezFormGroup.controls[fieldName].errors.minlength.requiredLength;
        const actualLeng = this.ezFormGroup.controls[fieldName].errors.minlength.requiredLength;

        this.errorMessage[fieldName] +="Minimum Length required is " +requiredLeng + "But entered Length is " + actualLeng + ". ";
        }
        if(errorKey === "maxlength") {
          const requiredLeng = this.ezFormGroup.controls[fieldName].errors.maxlength.requiredLength;
        const actualLeng = this.ezFormGroup.controls[fieldName].errors.maxlength.actualLength;

        this.errorMessage[fieldName] += "Maximum Length allowed is " + requiredLeng + " But entered Length is " + actualLeng + ". ";
        }
        if(errorKey === "email") {
          this.errorMessage[fieldName] +="The email address entered is invalid. ";
        }
        if(errorKey === "min") {
          const requiredValue = this.ezFormGroup.controls[fieldName].errors.min.min;
        const actualValue = this.ezFormGroup.controls[fieldName].errors.min.actual;
        this.errorMessage[fieldName] +="The min value allowed is :" + requiredValue + " But actual value entered is " + actualValue + ". ";
        }
        if(errorKey === "max") {
          const requiredValue = this.ezFormGroup.controls[fieldName].errors.max.max;
        const actualValue = this.ezFormGroup.controls[fieldName].errors.max.actual;
        this.errorMessage[fieldName] +="The max value allowed is :" + requiredValue + " But actual value entered is " + actualValue + ". ";
        }


        if(errorKey === "pattern") {
            this.errorMessage[fieldName] += "The pattern entered is invalid, allowed pattern is :";

        }
        // switch (errorKey) {
        //   case "required": {
        //     this.errorMessage[fieldName] = fieldName + " is required";
        //     break;
        //   }

        //   case "minlength": {
        //     const requiredLeng = this.ezFormGroup.controls[fieldName].errors
        //       .minlength.requiredLength;
        //     const actualLeng = this.ezFormGroup.controls[fieldName].errors
        //       .minlength.requiredLength;

        //     this.errorMessage[fieldName] =
        //       "Minimum Length required is " +
        //       requiredLeng +
        //       "But entered Length is " +
        //       actualLeng;

        //     break;
        //   }

        //   case "maxlength": {
        //     const requiredLeng = this.ezFormGroup.controls[fieldName].errors
        //       .maxlength.requiredLength;
        //     const actualLeng = this.ezFormGroup.controls[fieldName].errors
        //       .maxlength.actualLength;

        //     this.errorMessage[fieldName] =
        //       "Maximum Length allowed is " +
        //       requiredLeng +
        //       " But entered Length is " +
        //       actualLeng;
        //     break;
        //   }

        //   case "email": {
        //     this.errorMessage[fieldName] =
        //       "The email address entered is invalid";

        //     break;
        //   }

        //   case "pattern": {
        //     this.errorMessage[fieldName] =
        //       "The pattern entered is invalid, allowed pattern is :";

        //     break;
        //   }

        //   case "min": {
        //     const requiredValue = this.ezFormGroup.controls[fieldName].errors
        //       .min;
        //     const actualValue = this.ezFormGroup.controls[fieldName].errors
        //       .actual;
        //     this.errorMessage[fieldName] =
        //       "The min value allowed is :" +
        //       requiredValue +
        //       " But actual value entered is " +
        //       actualValue;

        //     break;
        //   }

        //   case "max": {
        //     const requiredValue = this.ezFormGroup.controls[fieldName].errors
        //       .max;
        //     const actualValue = this.ezFormGroup.controls[fieldName].errors
        //       .actual;
        //     this.errorMessage[fieldName] =
        //       "The min value allowed is :" +
        //       requiredValue +
        //       " But actual value entered is " +
        //       actualValue;

        //     break;
        //   }
        // }
      });
    }

    return true;
  }
}
