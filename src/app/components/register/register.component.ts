import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredUser: boolean = false;

  constructor(private UserService: UserService) { }

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

    this.registeredUser = this.UserService.registedUser(newUser.email);
    this.UserService.setStorage(newUser);

    console.log(newUser);
  }
}
