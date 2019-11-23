import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-configure-menu',
  templateUrl: './configure-menu.component.html',
  styleUrls: ['./configure-menu.component.css']
})
export class ConfigureMenuComponent implements OnInit {

  configMenuForm:FormGroup
  constructor(private configMenuBuilder: FormBuilder) { }
  mainMenuList:Array<string> = [];
  showAddNewMenuTextBox:Boolean=false;
  mainMenuError:Boolean=false;
  errorMessage:any = {};
   
  addNewMenu() {
    console.log(this.configMenuForm.get('newMenu').value);
    if(this.mainMenuList.length >= 10) {
      this.errorMessage['newMenu'] = 'Cannot Add more than 10 Menus';
      this.mainMenuError = this.errorMessage.newMenu;
        this.mainMenuError = true;
    } else {
        this.mainMenuList.push(this.configMenuForm.get('newMenu').value);
        this.configMenuForm.get('newMenu').setValue('');
        this.showAddNewMenuTextBox = false;
      }



  }

  // validateMainMenu() {
  //   console.log("MainMenu Length " + this.mainMenuList.length);
  //   if(this.mainMenuList.length >= 11) {
  //     this.errorMessage['newMenu'] = 'Cannot Add more than 10 Menus';
  //     console.log("MainMenu Length Inside" + this.mainMenuList.length);
  //     this.mainMenuError = this.errorMessage.newMenu;
  //     return true;

  //   }
  //   return true;
  // }

  ngOnInit() {
    this.configMenuForm = this.configMenuBuilder.group({
      menu: ['', Validators.required],
      newMenu: '',
      subMenus: this.configMenuBuilder.array([this.buildSubMenus()])
        });
  }

  ngOnChanges(changes: SimpleChanges) {
  }


      buildSubMenus(): FormGroup {
        return this.configMenuBuilder.group({
          menuLabel: '',
          menuLink: '',
          hasChildMenus: false,
          childMenus : this.configMenuBuilder.array([this.buildChildMenus()])
        });
      }
      
      buildChildMenus(): FormGroup {
        return this.configMenuBuilder.group({
          childLabel: '',
          childLink: '',
        
        });
      }

      get subMenus(): FormArray {
        return <FormArray>this.configMenuForm.get("subMenus");
      }

      addSubMenus(): void {
        this.subMenus.push(this.buildSubMenus());
        console.log(this.subMenus.controls[0].get("childMenus"));
      }

      removeSubMenus(): void {
        this.subMenus.removeAt(this.subMenus.length - 1);
      }
      addChildMenus(i): void {
          (<FormArray>this.subMenus.controls[i].get("childMenus")).push(this.buildChildMenus());
      }
      removeChildMenus(i): void {
        (<FormArray>this.subMenus.controls[i].get("childMenus")).removeAt(i);

      }
      validate(menuName) {
        return false;
      }
}
