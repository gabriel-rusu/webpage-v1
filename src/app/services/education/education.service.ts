import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Education} from '../../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  url: string = 'https://raw.githubusercontent.com/RusuGabriel/Webpage/master/src/assets/data/education.json';

  constructor(private http: HttpClient) {
  }


  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.url);
  }
}
