import { Injectable } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  url: string = 'ceva';

  constructor(private http: HttpClient) { }


  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url);
  }
}
