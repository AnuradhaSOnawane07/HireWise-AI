import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) {}

  uploadResume(file: File) {

    const formData = new FormData();

    formData.append("resume", file);

    const token =
      localStorage.getItem("token") ||
      sessionStorage.getItem("token");

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post(
      `${environment.apiUrl}/resume/upload`,
      formData,
      { headers }
    );

  }

}