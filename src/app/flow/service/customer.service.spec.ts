import { CustomerService } from './customer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('CustomerService', () => {

  function setup(){
    const http = jasmine.createSpyObj('http',['get','post','put','patch']);
  
    const service = new CustomerService(
      http
     
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
});
