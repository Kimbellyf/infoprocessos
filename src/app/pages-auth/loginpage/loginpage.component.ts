import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthsService } from '../service/auth/auths.service';
import { FormBuilder, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
  providers: [MessageService]
})
export class LoginpageComponent implements OnInit {

  user: any;
  loginData: any = {};

  errors: string[] = [];
  messages: string[] = [];
  redirectDelay:number =0;
  submitted: boolean = false;
 
  loginForm = this.formBuilder.group({
    username: ['', Validators.required, //Validators.email
    ],
    password: ['', Validators.required],
  });

  constructor(
    private readonly authService: AuthsService,
    protected router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { 

  }

  ngOnInit(): void {

  }
  login(){
   
    this.messages =[];
    this.errors = [];
    this.submitted = true;
    if(this.loginForm && this.loginForm.value){
      this.authService.login(this.loginForm.value).subscribe(
        (res: any)=>{
          this.authService.authenticate(
            //res.token,
            //'5af8ba4c-43e3-4361-9e9c-f73458ab6a5b',
            '3013c791-18ea-48ff-b4ef-ad5cae624cb6',
            'kim'
            //this.user.login
          
          );
         
          this.messages.push("Login efetuado com sucesso!");
          this.router.navigate(['/flow/search']);
        },
        error =>{
        
          this.showError();
          this.router.navigate(['/flow/search']);
          this.errors.push("Login inválido");
          this.submitted = false;
        });
    }
  }
  getConfigValue(key: string): any{
    //return getDeepFromObjec(this.options, key, null);
  }
  showError(status: string = '', msg: string="Error ao tentar logar") {
    this.messageService.add({severity:'error', summary: 'Error' + status, detail: msg});
  }
  get username() {
    return this.loginForm.get('username');
  } 
  get password() {
    return this.loginForm.get('password');
  } 


}
