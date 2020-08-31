import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Experience} from '../../models/experience.model';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input()
  experience: Experience;
  @HostBinding('attr.class') cssClasses = 'pad';

  constructor() {
  }

  ngOnInit(): void {
  }

  getPeriodOfTime(): string {
    return this.process(this.experience.startDate) + ' - ' + this.process(this.experience.endDate);
  }

  process(date: Date): string {
    if (date === null || date.toString() === 'null') {
      return 'Present';
    } else {
      return date.toString();
    }
  }
}
