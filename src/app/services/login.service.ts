import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../interfaces/login';
import {LOGIN, SERVER_URL} from '../interfaces/server';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }


  makeLogin(body: any): Observable<Login> {
    const url = SERVER_URL + LOGIN;
    return this.http.post<Login>(url, body, {responseType: 'json'});
  }

  getToken(): string {
    try {
      if (localStorage.getItem('token')) {
        return localStorage.getItem('token');
      } else {
        return '';
      }
    } catch (e) {
      return '';
    }
  }

  /**
   * save token in local store
   */
  setToken(token: string): void {
    try {
      localStorage.setItem('token', token);
    } catch (e) {
      console.log(e);
    }
  }

}
