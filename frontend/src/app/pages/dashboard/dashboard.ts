import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
  CommonModule,
  RouterModule
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})


export class Dashboard implements OnInit {

  user: any;

  greeting = '';

  today = '';

  ngOnInit() {

    const data =
      localStorage.getItem('user') ||
      sessionStorage.getItem('user');

    if (data) {

      this.user = JSON.parse(data);

    }

    this.setGreeting();

    this.today = new Date().toLocaleDateString(
      'en-IN',
      {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }
    );

  }
  constructor(private router: Router) {}
goToResumeUpload() {

  this.router.navigate(['/resume-upload']);

}
  setGreeting() {

    const hour = new Date().getHours();

    if (hour < 12) {

      this.greeting = 'Good Morning';

    } else if (hour < 17) {

      this.greeting = 'Good Afternoon';

    } else {

      this.greeting = 'Good Evening';

    }

  }

 

}