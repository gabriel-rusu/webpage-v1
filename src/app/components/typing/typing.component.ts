import { Component, OnInit, Input } from '@angular/core';
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
  writtenWord: string;

  constructor() { }

  ngOnInit() {
    this.writtenWord = "|";
    let self = this;
    setTimeout(function() {self.typing()}, this.speed);
  }

  typing(): any {
    let self = this;
    let currentIndex = this.writtenWord.length - 1;
    if (this.finishedTyping()){
      console.log("finished!!!");
      let element = document.getElementById(this.id);
      element.innerHTML = element.textContent.substring(0,this.word.length+1) + `<span aria-hidden="true"></span>`;
      return;
    }

    this.writtenWord = this.word.substr(0, currentIndex + 1) + "|";
    console.log(this.writtenWord);
    setTimeout(function() {self.typing()}, this.speed);
  }
  finishedTyping() {
    return this.writtenWord.length-1 == this.word.length;
  }
}
