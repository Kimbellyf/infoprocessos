import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { SearchprocService } from './searchproc.service';


describe('SearchprocService', () => {
  function setup(){
    const http = jasmine.createSpyObj('http',['get','post','put','patch']);
    const router = jasmine.createSpyObj('router',[]);

    const service = new SearchprocService(
      http,
     
    );
    return {
      service,
      http,
    }
  }

  it('should be created', () => {
    const {
      service
    } = setup();
    expect(service).toBeTruthy();
  });

  describe('searchProcessWithCNPJ',()=>{
    const {
      service,
      http
    } = setup();

    it('if sucess', () => {
      http.get.and.returnValue(of({}));
      expect(()=>{
        service.searchProcessWithCNJ('5001682-88.2020.8.13.0672','8').subscribe(
          {}
        )
      }).not.toThrow();
    });

    it('if throwerror', () => {
      let exampleHttpError = new HttpErrorResponse({
        status:404,
        error: ''
      });
      http.get.and.returnValue(throwError(() => exampleHttpError))
      expect(()=>{
        service.searchProcessWithCNJ('500168288.20208.13','8').subscribe(
          {}
        )
      }).not.toThrow();
    });

  })
});
