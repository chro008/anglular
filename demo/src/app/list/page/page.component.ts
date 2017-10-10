import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }

  @Input()
  private page: number = 1;


  @Output()
  private next = new EventEmitter<Number>();

  pageHandler (nextNumber){
    const next = this.page + nextNumber;
    if (next < 1) return;
    this.page = next;
    this.next.emit(next);
  }

  ngOnInit() {
  }

}
