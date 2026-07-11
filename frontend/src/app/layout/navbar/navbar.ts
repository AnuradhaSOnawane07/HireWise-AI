import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  notifications = 3;

  user: any;

  showMenu = false;

  constructor(private router: Router) {}

  ngOnInit() {

    const data =
      localStorage.getItem("user") ||
      sessionStorage.getItem("user");

    if(data){

      this.user = JSON.parse(data);

    }

  }

  toggleMenu(){

    this.showMenu = !this.showMenu;

  }

  logout(){

    localStorage.clear();

    sessionStorage.clear();

    this.router.navigate(['/login']);

  }

  @HostListener('document:click')

  closeMenu(){

    this.showMenu=false;

  }

  stop(event:Event){

    event.stopPropagation();

  }

  getUserInitial(): string {

  if (!this.user?.fullName) {

    return "U";

  }

  return this.user.fullName.charAt(0).toUpperCase();

}

getAvatarColor(): string {

  const colors = [

    "#2563EB", // Blue
    "#16A34A", // Green
    "#DC2626", // Red
    "#EA580C", // Orange
    "#9333EA", // Purple
    "#0891B2", // Cyan
    "#DB2777", // Pink
    "#4F46E5"  // Indigo

  ];

  const name = this.user?.fullName || "User";

  let hash = 0;

  for (let i = 0; i < name.length; i++) {

    hash += name.charCodeAt(i);

  }

  return colors[hash % colors.length];

}

}