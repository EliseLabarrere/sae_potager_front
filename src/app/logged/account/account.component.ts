import { Component, ViewChild, OnInit  } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit{
  @ViewChild('dialogLogOut') dialogLogOut: any;
  user: User|undefined;

  constructor(
    public apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.user = this.apiService.user;
  }

  logOutModal(){
    this.dialogLogOut.nativeElement.showModal();
  }

  logOut() {
    this.apiService.logout();
  }
}
