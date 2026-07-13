import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-analysis.html',
  styleUrl: './resume-analysis.css'
})
export class ResumeAnalysis implements OnInit {

  analysis: any;

  ngOnInit() {

    const data = sessionStorage.getItem("analysis");

    if (data) {

      this.analysis = JSON.parse(data);

    }

  }

}