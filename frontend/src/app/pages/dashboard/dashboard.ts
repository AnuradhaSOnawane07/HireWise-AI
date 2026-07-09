import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCard } from '../../shared/stat-card/stat-card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    StatCard
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}