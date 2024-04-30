import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { APIURL } from '../../../environments/environment';
import { User } from '../models/user.model';
import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public token?: string;
  urlParams: any;
  user?: User;
  isInit: boolean = false;
  initPromise: Subject<boolean> = new Subject<boolean>();
  currentDate = new Date();


  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.init();
  }

  public async init(){
    this.urlParams = new URLSearchParams(window.location.search);

    this.token = localStorage.getItem('apiToken') ? JSON.parse(localStorage.getItem('apiToken') as string).token : undefined;

    if(this.token){
      await this.getUser();
    }

    this.isInit = true;
  }

  public async requestApi(action: string, method: string = 'GET', datas: any = {}, httpOptions: any = {}): Promise<any> {

    const methodWanted = method.toLowerCase();
    let route = APIURL + action;

    let req = null;

    if (httpOptions.headers === undefined) {
      httpOptions.headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      });
    }

    if (this.token) {
      httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.token);
    }

    switch (methodWanted) {
      case 'post':
        req = this.http.post(route, datas, httpOptions);
        break;
      case 'patch':
        req = this.http.post(route, datas, httpOptions);
        break;
      case 'put':
        req = this.http.put(route, datas, httpOptions);
        break;
      case 'delete':
        route += '?' + Object.keys(datas).map((key) => {
          return key + '=' + datas[key];
        }).join('&');

        req = this.http.delete(route, httpOptions);
        break;
      default:
        route += '?' + Object.keys(datas).map((key) => {
          return key + '=' + datas[key];
        }).join('&');

        req = this.http.get(route, httpOptions);
        break;
    }

    return req.toPromise();
  }

  savTokens(token: string){
    localStorage.setItem('apiToken', JSON.stringify({
      token: token,
    }));

    this.token = token;
  }

  async getUser(): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.requestApi('/api/auth/me', 'GET')
        .then((res: User) => {
          this.user = res;
          resolve(res);
        })
        .catch((err) => {
          console.error(err);
          this.logout();
          reject(err);
        });
    });
  }
  

  isLogged(): boolean{
    return this.token !== undefined;
  }

  deleteToken(): void {
    this.token = undefined;
    localStorage.removeItem('apiToken');
  }

  logout(): void {
    this.requestApi('/api/auth/logout', 'POST').then(
      (data) => {
        this.deleteToken();
        this.user = undefined;
        console.log('deco', this.user, this.token, this.isLogged());
        this.router.navigate(['/login']);
      },
      (error) => {
        this.deleteToken();
        this.user = undefined;
        this.router.navigate(['/login']);
        console.log(error);
      },
    );
  }
}
