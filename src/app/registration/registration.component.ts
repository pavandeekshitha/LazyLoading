import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/userservice';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  loading = false;
  constructor(private router: Router, private userService: UserService) { }

  register(){
    this.loading = true;
    this.userService.create(this.model)
        .subscribe(
          data => {
            this.router.navigate(['./login']);
          },
          error => {
            this.loading =false;
          }
        )
  }

  ngOnInit() {
  }

}
