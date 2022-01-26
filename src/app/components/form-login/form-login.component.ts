import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  loginUser: boolean = false;

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  login(){
    this.loginUser = this.UserService.valida({
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    });
    if(this.loginUser){
      this.router.navigate(['/starships']);
    }
  }
}
