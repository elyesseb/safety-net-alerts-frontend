import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  signOut(): void {
    localStorage.clear();
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    // const user = localStorage.getItem(USER_KEY);
    // console.log(user);
    const decoded = this.getDecodedAccessToken(localStorage.getItem(TOKEN_KEY));
    // console.log(decoded);

    if (decoded) {
      console.log(decoded.roles);
      return decoded;
    }

    return {};
  }

  getDecodedAccessToken(token: any): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
