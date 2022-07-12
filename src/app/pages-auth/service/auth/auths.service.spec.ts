import { AuthsService } from './auths.service';
import {of, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

describe('AuthsService', () => {
  function setup(){
    const http = jasmine.createSpyObj('http',['get','post','put','patch']);
    const router = jasmine.createSpyObj('router',['navigate']);

    const service = new AuthsService(
      http,
      router
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

  describe('login',()=>{
    const {
      service,
      http
    } = setup();

    it('if sucess', () => {
      http.post.and.returnValue(of({}));
      let loginForm ={
        username: 'kimtestetestes@hotmail.com',
        password: "12345"
      }
      expect(()=>{
        service.login(loginForm).subscribe(
          {}
        )
      }).not.toThrow();
    });

    it('if throwerror', () => {
      let exampleHttpError = new HttpErrorResponse({
        status:404,
        error: ''
      });
      let loginForm ={
        username: 'kimtestetestes@hotmail.com',
        password: "12345"
      }
      http.post.and.returnValue(throwError(() => exampleHttpError))
      expect(()=>{
        service.login(loginForm).subscribe(
          {}
        )
      }).not.toThrow();
    });

  });
});
