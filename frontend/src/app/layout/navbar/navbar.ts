import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  notifications = 3;

  constructor(private router: Router) {}

  logout() {

    console.log("Logout Clicked");

    localStorage.clear();

    this.router.navigateByUrl('/login');

  }

}