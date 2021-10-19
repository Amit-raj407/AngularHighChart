import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './models/User';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  noOfTries: number = 0;
  allowAccess: boolean = true;


  user: User = new User;
  sub!: Subscription;

  data: any

  errorMessage: string = '';

  /*-----------------------------
    Reactive Forms Module
  -------------------------------*/

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$")
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });


  // -------------------------------

  constructor(private router: Router, private authService: AuthService) { }


  onSubmit(): void {
    console.log("click");
    console.log(this.loginForm.value);

    this.authService.userAuth(this.loginForm.value).subscribe({
      next: responseData => {
        this.data = responseData
        console.log(this.data);
        localStorage.setItem('status',this.data.responseCode);
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.errorMessage = err.error.responseMessage;
        this.noOfTries++;
        if(this.noOfTries >= 3) {
          this.errorMessage = "3 incorrect attempts!! Try Again later";
          this.allowAccess = false;
          
          // Button can be clicked again after 5 mins
          setTimeout(() => {
            this.errorMessage = '';
            this.allowAccess = true;
          }, 300000);
          
          console.log(this.allowAccess);
          
        }
        console.log(err.error);
      }

    });


  }

  ngOnInit(): void {
  }

}
