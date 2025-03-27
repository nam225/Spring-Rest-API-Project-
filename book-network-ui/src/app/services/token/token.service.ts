import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  isTokenNotValid() {
    return !this.isTokenValid();
  }
  isTokenValid() {
    const token = this.token;
    if(!token){
      return false;
    }
    // decode token
    const jwtHeader = new JwtHelperService();
    // check expiry date
    const isTokenExpired = jwtHeader.isTokenExpired(token);
    if(isTokenExpired){
      localStorage.clear();
      return false;
    }
    return true;
  }
  set token(token: string) {
    localStorage.setItem('token', token);
  }

  get token() {
    return localStorage.getItem('token') as string;
  }
}
