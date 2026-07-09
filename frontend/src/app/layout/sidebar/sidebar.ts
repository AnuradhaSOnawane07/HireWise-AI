import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  collapsed = false;

  menuItems = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard'
    },
    {
      title: 'Resume',
      icon: 'description',
      route: '/resume'
    },
    {
      title: 'ATS Analysis',
      icon: 'analytics',
      route: '/ats'
    },
    {
      title: 'AI Analysis',
      icon: 'psychology',
      route: '/analysis'
    },
    {
      title: 'Job Match',
      icon: 'work',
      route: '/job-match'
    },
    {
      title: 'Interview',
      icon: 'forum',
      route: '/interview'
    },
    {
      title: 'Analytics',
      icon: 'bar_chart',
      route: '/analytics'
    },
    {
      title: 'Settings',
      icon: 'settings',
      route: '/settings'
    }
  ];

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

}