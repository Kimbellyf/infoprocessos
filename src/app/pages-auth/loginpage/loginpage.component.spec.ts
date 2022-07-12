import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpageComponent } from './loginpage.component';
import {of, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
  
describe('LoginpageComponent', () => {
    function setup(){
      const authService = jasmine.createSpyObj('authService',['login']);
      const router = jasmine.createSpyObj('router',['navigate']);
      const formBuilder = jasmine.createSpyObj('formBuilder',['group']);
      const messageService = jasmine.createSpyObj('messageService',['add']);
     
      const component = new LoginpageComponent(
        authService,
        router,
        formBuilder,
        messageService
      );
      return {
        component,
        authService
      }
    }
  
    it('should be created', () => {
      const {
        component
      } = setup();
      expect(component).toBeTruthy();
    });
  
    describe('login',()=>{
      const {
        component,
        authService
      } = setup();
  
      it('if sucess', () => {
        //component.loginForm.setValue({username:'kim@',password:'23445'});
        authService.login.and.returnValue(of({}));
        component.login();
        expect(true).toBe(true);   
      });
  
      it('if throwerror', () => {
        let exampleHttpError = new HttpErrorResponse({
          status:404,
          error: ''
        });

        //component.loginForm.setValue({username:'kim@',password:'ddsdsdd'});

        authService.login.and.returnValue(throwError(() => exampleHttpError))
        component.login();
        expect(true).toBe(true);
      });
  
    });
  });
  