import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';

  showPassword = false;
  showConfirmPassword = false;

  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

    if(localStorage.getItem("token")){
      this.router.navigate(['/dashboard']);
    }

  }

  togglePassword(){

    this.showPassword = !this.showPassword;

  }

  toggleConfirmPassword(){

    this.showConfirmPassword = !this.showConfirmPassword;

  }

  register(){

    this.errorMessage="";
    this.successMessage="";

    if(
      !this.fullName ||
      !this.email ||
      !this.password ||
      !this.confirmPassword
    ){

      this.errorMessage="Please fill all fields";

      return;

    }

    if(this.password !== this.confirmPassword){

      this.errorMessage="Passwords do not match";

      return;

    }

    this.loading=true;

    const data={

      fullName:this.fullName,

      email:this.email,

      password:this.password

    };

    this.authService.register(data).subscribe({

      next:(res:any)=>{

        this.loading=false;

        this.successMessage="Registration Successful";

        setTimeout(()=>{

          this.router.navigate(['/login']);

        },1500);

      },

      error:(err)=>{

        this.loading=false;

        this.errorMessage=

        err.error.message ||

        "Registration Failed";

      }

    });

  }

}