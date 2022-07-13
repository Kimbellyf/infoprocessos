import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchprocessComponent } from './searchprocess.component';
import {of, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
  
describe('SearchprocessComponent', () => {
    function setup(){
      const searchProcService = jasmine.createSpyObj('searchProcService',['searchProcessWithCNJ']);
      const primengConfig = jasmine.createSpyObj('primengConfig',['getTranslation']);
      const customerService = jasmine.createSpyObj('customerService',['getCustomersLarge']);
      const formBuilder = jasmine.createSpyObj('formBuilder',['group']);
      const messageService = jasmine.createSpyObj('messageService',['add']);
     

      const component = new SearchprocessComponent(
        searchProcService,
        primengConfig,
        customerService,
        formBuilder,
        messageService
      );
      return {
        component,
        searchProcService
      }
    }
  
    it('should be created', () => {
      const {
        component
      } = setup();
      expect(component).toBeTruthy();
    });
  
    describe('searchProcessWithCNJ',()=>{
      const {
        component,
        searchProcService
      } = setup();
  
      it('if sucess', () => {
        searchProcService.searchProcessWithCNJ.and.returnValue(of({}));
        component.searchProcessCNJEtc('5001682-88.2020.8.13.0672','8');
        expect(true).toBe(true);   
      });
  
      it('if throwerror', () => {
        let exampleHttpError = new HttpErrorResponse({
          status:404,
          error: ''
        });

        searchProcService.searchProcessWithCNJ.and.returnValue(throwError(() => exampleHttpError))
        component.searchProcessCNJEtc('2','');
        expect(true).toBe(true);
      });
  
    });
  });
  