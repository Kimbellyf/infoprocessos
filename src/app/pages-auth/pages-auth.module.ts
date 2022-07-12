import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesAuthRoutingModule } from './pages-auth-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AuthguardService } from './service/auth/authguard.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import {TabViewModule} from 'primeng/tabview';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {TooltipModule} from 'primeng/tooltip';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    PagesAuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    InputTextModule,
		CheckboxModule,
		ButtonModule,
		RadioButtonModule,
    RippleModule,
    FormsModule,
    PasswordModule,
    TabViewModule,
    DividerModule,
    ToolbarModule,
    ConfirmDialogModule,
    DialogModule,
    DynamicDialogModule,
    TooltipModule,
    MessagesModule,
    MessageModule,
    ToastModule,

    CardModule
  ],
  providers: [AuthguardService],
})
export class PagesAuthModule { }
