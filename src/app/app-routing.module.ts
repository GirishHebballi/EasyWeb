import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindComponent } from './find/find.component';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component';
import { CardDisaplyComponent } from './card-disaply/card-disaply.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FindListComponent } from './find-list/find-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigureNewPageComponent } from './configure-new-page/configure-new-page.component';
import { TypeTableComponent } from './type-table/type-table.component';
import { ConfigureMenuComponent } from './configure-menu/configure-menu.component';


const routes: Routes = [
  {
    path: 'addPage', component: AddComponent
  },
  {
    path: 'addNewPage', component: ConfigureNewPageComponent
  },
  {
    path: 'findPage', component: FindComponent
  },
  {
    path: 'getPage', component: GetComponent
  },
  {
    path: 'card/getPage', component: CardDisaplyComponent
  },
  {
    path: 'table', component: FindListComponent
  },
  {
    path: 'nav', component: NavBarComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'types', component: TypeTableComponent
  },
  {
    path: 'configureMenus', component: ConfigureMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
