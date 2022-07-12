import { TestBed } from '@angular/core/testing';

import { AuthguardService } from './authguard.service';
import {of, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

describe('AuthguardService', () => {
  function setup(){
    const authService = jasmine.createSpyObj('authService',['login']);
    const router = jasmine.createSpyObj('router',['navigate']);

    const service = new AuthguardService(
      authService,
      router
    );
    return {
      service,
      authService,
    }
  }

  it('should be created', () => {
    const {
      service
    } = setup();
    expect(service).toBeTruthy();
  });

});
