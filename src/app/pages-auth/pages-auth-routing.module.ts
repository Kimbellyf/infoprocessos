import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  //{
    //path: '',
    //component: LoginpageComponent,
    //children: [
      {
        path: '*',
        redirectTo: 'login',
      },
      {
        path: '',
        component: LoginpageComponent,
        pathMatch: 'full'
      }
    //],
  //},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesAuthRoutingModule { }
