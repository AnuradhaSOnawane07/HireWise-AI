import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css'
})
export class StatCard {

  @Input() title = '';
  @Input() value = '';
  @Input() subtitle = '';
  @Input() icon = '';
  @Input() color = 'bg-blue-500';

}