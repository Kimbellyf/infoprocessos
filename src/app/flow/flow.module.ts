import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchprocessComponent } from './pages/searchprocess/searchprocess.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchprocService } from './service/searchproc.service';
import { CustomerService } from './service/customer.service';
import { AuthguardService } from '../pages-auth/service/auth/authguard.service';
import { MessageService } from 'primeng/api';

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
import { FlowRoutingModule } from './flow-routing.module';
import { ComponentstoallModule } from '../componentstoall/componentstoall.module';



@NgModule({
  declarations: [
    SearchprocessComponent,
    
   
  ],
  imports: [
    
    CommonModule,
    PaginatorModule,
    ReactiveFormsModule,
    FlowRoutingModule,
    
    SidebarModule,
    SliderModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    InputMaskModule,
    RippleModule,

    MenubarModule,
   
    CardModule,
    FormsModule,
    ComponentstoallModule
    
  ],
  providers: [SearchprocService,CustomerService,AuthguardService]
})
export class FlowModule { }
