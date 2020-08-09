import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent implements OnInit {
  @Input() word: string;
  @Input() style: string;
  @Input() speed: number;
  @Input() id: string;
  @Output()
  ready: EventEmitter<boolean>;
  writtenWord: string;

  constructor() {
    this.ready = new EventEmitter();
  }

  ngOnInit() {
    this.writtenWord = "|";
    let self = this;
    this.ready.emit(false);
    setTimeout(function () { self.typing() }, this.speed);
  }

  typing(): any {
    let self = this;
    let currentIndex = this.writtenWord.length - 1;
    if (this.finishedTyping()) {
      let element = document.getElementById(this.id);
      element.innerHTML = element.textContent.substring(0, this.word.length + 1) + `<span class="cursor" aria-hidden="true"></span>`;
      this.ready.emit(true);
      return;
    }

    this.writtenWord = this.word.substr(0, currentIndex + 1) + "|";
    setTimeout(function () { self.typing() }, this.speed);
  }
  finishedTyping() {
    return this.writtenWord.length - 1 == this.word.length;
  }
}
