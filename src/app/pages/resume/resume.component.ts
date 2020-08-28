import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  title: string = 'Résumé';
  @HostBinding('attr.class') cssClasses: string = 'full-width';

  constructor() {
  }

  ngOnInit(): void {
  }

}
