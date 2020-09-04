import {Component, HostBinding, OnInit} from '@angular/core';
import {Experience} from '../../models/experience.model';
import {ExperienceService} from '../../services/experience/experience.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  @HostBinding('attr.class') cssClasses: string = 'full-width';

  title: string = 'Résumé';
  experience: Experience[];
  ready: boolean = false;

  constructor(private experienceService: ExperienceService) {
  }

  ngOnInit(): void {
    this.experienceService.getExperience().subscribe(data => {
        this.experience = data;
        this.ready = true;
      }
    );
  }

}
