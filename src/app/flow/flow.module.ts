import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchprocessComponent } from './pages/searchprocess/searchprocess.component';
import { FlowRoutingModule } from './flow-routing.module';
import {PaginatorModule} from 'primeng/paginator';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


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
import { SearchprocService } from './service/searchproc.service';
import { CustomerService } from './service/customer.service';

@NgModule({
  declarations: [
    SearchprocessComponent,
   
  ],
  imports: [
    CommonModule,
    FlowRoutingModule,
    PaginatorModule,
    
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
    FormsModule
    
    
  ],
  providers: [SearchprocService,CustomerService]
})
export class FlowModule { }
