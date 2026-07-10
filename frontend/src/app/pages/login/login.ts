import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
  
})
export class Login {

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {

    console.log("Email:", this.email);
    console.log("Password:", this.password);

    const data = {
      email: this.email,
      password: this.password
    };

    this.authService.login(data).subscribe({
  next: (res: any) => {

    localStorage.setItem('token', res.token);

    alert("Login Successful");

    this.router.navigate(['/dashboard']);
  },

  error: (err) => {
    alert(err.error.message || "Login Failed");
  }
});

  }

}