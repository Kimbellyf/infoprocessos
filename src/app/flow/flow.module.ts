import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchprocessComponent } from './pages/searchprocess/searchprocess.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';

@NgModule({
  declarations: [
    SearchprocessComponent,
    LoginpageComponent,
   
  ],
  imports: [
    CommonModule
  ]
})
export class FlowModule { }
