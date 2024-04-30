import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIURL } from '../../../environments/environment';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm : FormGroup;
  URLAPI = APIURL;
  registerError?:string;


  constructor(
    private fb: FormBuilder,
    public apiService: ApiService,
    private router: Router,
    ) {

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(passwordPattern)]]
    });
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      let req = {
        name: this.registerForm.value['name'],
        email: this.registerForm.value['email'],
        password: this.registerForm.value['password'],
      };
  
      try {
        let res = await this.apiService.requestApi('/api/auth/register', 'POST', req);
        this.apiService.savTokens(res.token);
        await this.apiService.getUser();
        this.router.navigate(['/guide']);
      } catch (error) {
        console.error('Registration Error:', error);
        this.registerError = "Le mot de passe est surement trop simple"
      }
    }
  }
  

  ngOnInit() {
  }
}
