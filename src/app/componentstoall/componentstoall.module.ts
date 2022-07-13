import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuwithloginComponent } from './menuwithlogin/menuwithlogin.component';


import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';

import {SidebarModule} from 'primeng/sidebar';
import {InputMaskModule} from 'primeng/inputmask';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import {PaginatorModule} from 'primeng/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenuwithloginComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports:
    [ MenuwithloginComponent]
})
export class ComponentstoallModule { }
