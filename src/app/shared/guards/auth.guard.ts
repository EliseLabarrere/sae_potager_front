import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {ApiService} from "../services/api.service";

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  private url: string = '';
  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  private isLoginOrRegister(): boolean {
    if (this.url.includes('/login') || this.url.includes('/register')) {
      return true;
    }
    return false;
  }

  private authState(): boolean {
    if (this.isLoginOrRegister()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  private noAuthState(): boolean {
    if (this.isLoginOrRegister()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  checkLogin(state: RouterStateSnapshot): boolean {
    this.url = state.url;
    if (this.apiService.isLogged()) {
      return this.authState();
    }
    return this.noAuthState();
  }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (!this.apiService.isInit) {
      let res = await this.apiService.initPromise.subscribe((res) => {
        if (res) {
          return this.checkLogin(state);
        }
        return false;
      });
      if (!res) {
        return false;
      }
    }
    return this.checkLogin(state);
  }
}
