import {Component, HostBinding, OnInit} from '@angular/core';
import {Experience} from '../../models/experience.model';
import {ExperienceService} from '../../services/experience/experience.service';
import {EducationService} from '../../services/education/education.service';
import {Education} from '../../models/education.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  @HostBinding('attr.class') cssClasses: string = 'full-width';

  title: string = 'Résumé';
  educationDegrees: Education[];
  experience: Experience[];
  ready1: boolean = false;
  ready2: boolean = false;

  constructor(private experienceService: ExperienceService, private educationService: EducationService) {
  }

  ngOnInit(): void {
    this.experienceService.getExperience().subscribe(data => {
      this.experience = data;
      this.ready1 = true;
    });

    this.educationService.getEducation().subscribe(data => {
      this.educationDegrees = data;
      this.ready2 = true;
    });
  }

}
