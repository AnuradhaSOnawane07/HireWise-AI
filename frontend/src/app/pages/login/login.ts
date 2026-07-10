import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { GoogleService } from '../../services/google.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.html',
  
  styleUrl: './login.css'
})
export class Login implements AfterViewInit {

  email = '';
  password = '';

  rememberMe = false;

  showPassword = false;

  loading = false;

  errorMessage = '';
   @ViewChild('googleButton', { static: true })
  googleButton!: ElementRef;
  
  constructor(
  private authService: AuthService,
  private googleService: GoogleService,
  private router: Router
) {

  if (
    localStorage.getItem("token") ||
    sessionStorage.getItem("token")
  ) {
    this.router.navigate(['/dashboard']);
  }

}

  togglePassword(){

    this.showPassword = !this.showPassword;

  }
  


  login(){

    this.errorMessage='';

    // Empty Validation
    if(!this.email || !this.password){

      this.errorMessage="Please enter Email and Password";

      return;

    }

    // Email Validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(this.email)){

      this.errorMessage="Please enter a valid email address.";

      return;

    }

    this.loading=true;

    this.authService.login({

      email:this.email,

      password:this.password

    }).subscribe({

      next:(res:any)=>{

        this.loading=false;

        // Remember Me
        if(this.rememberMe){

          localStorage.setItem(
            "token",
            res.token
          );

          localStorage.setItem(
            "user",
            JSON.stringify(res.user)
          );

        }else{

          sessionStorage.setItem(
            "token",
            res.token
          );

          sessionStorage.setItem(
            "user",
            JSON.stringify(res.user)
          );

        }

        this.router.navigate(['/dashboard']);

      },

      error:(err)=>{

        this.loading=false;

        this.errorMessage=

        err.error.message ||

        "Login Failed";

      }

    });

    

  }

  ngAfterViewInit() {

  this.googleService.initializeGoogle((response: any) => {

  console.log("Google Response:", response);

  this.googleService.loginWithGoogle(response.credential)
    .subscribe({

      next: (res: any) => {
        console.log("Backend Response:", res);

        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));

        this.router.navigate(['/dashboard']);
      },

      error: (err) => {
        console.log("Backend Error:", err);
        this.errorMessage = "Google Login Failed";
      }

    });

});

  this.googleService.renderButton(
    this.googleButton.nativeElement
  );

}

}