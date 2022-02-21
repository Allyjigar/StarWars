import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registeredUser: boolean = false;


  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  checkPass: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    const password: string | null = group.get('password')?.value;
    const repassword: string | null = group.get('repassword')?.value;

    return password === repassword ? null : { notMatch: true };
  }

  registerForm: FormGroup = new FormGroup ({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required]),
    'repassword': new FormControl('', [Validators.required])
  }, {validators: this.checkPass});

  register(): void{
    const newUser: User = {
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value
    }

    this.registeredUser = this._userService.registedUser(newUser.email);
    this._userService.setStorage(newUser);
    Swal.fire(
      'Welcome ' + this.registerForm.get('email')?.value + '!',
      'Your registration has been successful',
      'success'
    );
    this.router.navigate(['/login']);

    console.log(newUser);
  }
}
