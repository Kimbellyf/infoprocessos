import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";
import { Credentials } from '../../models/auth/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthsService {

  constructor(
    private http: HttpClient,
    private readonly router: Router
  ) {
    
  }
  getAuthHeader(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  login(credentials: Credentials): Observable<any>{ //Observable<AuthResponse>{
    const url = '';
    const options = {headers: this.getAuthHeader()};
    //return this.http.post<AuthResponse> (url, credentials, options);
    return this.http.post<any> (url, credentials, options);
  }
  authenticate(token: string, login: string){
    localStorage.setItem("token",token);
    localStorage.setItem("login",login);

  }
  isAuthenticated(): boolean {
    const token = this.getToken();
    if(token !==undefined && token!== null){
      //const {exp} = jwt_decode(token);
      let exp = 10;
      const expired = Date.now()> (exp*1000);
      if(expired){
        this.logout();
      }
      return !expired;
    }
    this.logout(false);
    return false;
  }
  logout(redirect= true){
    localStorage.clear();
    if(redirect){
      this.router.navigateByUrl('auth/login');
    }
  }
  getToken(): string {
    const token = localStorage.getItem("token");
    return !token? 'undefined': token;
  }
  getLogin(): string{
    const login = localStorage.getItem("login");
    return !login ? "undefined": login;
  }
  public decodePayloadJWT(): any {
    try {
      return jwt_decode(this.getToken());
    } catch (Error) {
      return null;
    }
  }
  
  
}
