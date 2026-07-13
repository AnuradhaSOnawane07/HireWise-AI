import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resume-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-upload.html',
  styleUrl: './resume-upload.css'
})
export class ResumeUpload {

  selectedFile: File | null = null;

  loading = false;

 

constructor(
  private resumeService: ResumeService,
  private router: Router
){}

  onFileSelected(event: any) {

    if (event.target.files.length > 0) {

      this.selectedFile = event.target.files[0];

    }

  }

  analyzeResume() {

    if (!this.selectedFile) {

      alert("Please select a resume.");

      return;

    }

    this.loading = true;

    this.resumeService.uploadResume(this.selectedFile)
      .subscribe({

        next: (res: any) => {

          this.loading = false;

          console.log("Resume Uploaded:", res);

          sessionStorage.setItem(
  "analysis",
  JSON.stringify(res)
);

this.router.navigate(['/resume-analysis']);

          // Next we'll redirect to Resume Analysis page
          // this.router.navigate(['/resume-analysis']);

        },

        error: (err: any) => {

          this.loading = false;

          console.log(err);

          console.log("Full Error:", err);

alert(
  err.error?.message ||
  err.message ||
  JSON.stringify(err.error) ||
  "Upload Failed"
);

        }

      });

  }

}