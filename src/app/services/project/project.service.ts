import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  githubRepos = "https://api.github.com/users/RusuGabriel/repos";

  constructor(private http: HttpClient) { }


  getProjects() {
    return this.http.get(this.githubRepos);
  }
}
