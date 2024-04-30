import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIURL } from '../../../environments/environment';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  loginForm: FormGroup;
  URLAPI = APIURL;
  loginError?: string;


  constructor(
    private fb: FormBuilder,
    public apiService: ApiService,
    private router: Router,
    ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['',Validators.required],
    });
  }

  ngOnInit(): void {}

  async login() {
    if (this.loginForm.valid) {
      let req = {
        email: this.loginForm.value['email'],
        password: this.loginForm.value['password'],
      };
      try {
        let res = await this.apiService.requestApi('/api/auth/login', 'POST', req);
        this.apiService.savTokens(res.token);
        await this.apiService.getUser();
        this.router.navigate(['/']);
      } catch (error) {
        this.loginError = 'Incorrect. Veuillez réessayer.'; // Définir le message d'erreur
      }
    }

  }

}
