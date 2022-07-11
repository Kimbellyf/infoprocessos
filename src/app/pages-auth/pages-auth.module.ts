import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesAuthRoutingModule } from './pages-auth-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';


@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    PagesAuthRoutingModule
  ]
})
export class PagesAuthModule { }
