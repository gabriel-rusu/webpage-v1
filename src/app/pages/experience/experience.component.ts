import {Component, OnInit, HostBinding} from '@angular/core';
import {Experience} from '../../models/experience.model';
import {ExperienceService} from '../../services/experience/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  title: string = 'Experience';
  speed: number = 250;
  xps: Experience[];
  ready: boolean = false;
  @HostBinding('attr.class') cssClasses: string = 'full-width';

  constructor(private experienceService: ExperienceService) {
  }

  ngOnInit(): void {
    this.experienceService.getExperience().subscribe(xps =>
      this.xps = xps);
  }

}
