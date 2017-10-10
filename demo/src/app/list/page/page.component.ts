import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() {
  }

  @Input()
  private page: number = 1;

  @Input()
  private total: number = 0;

  @Input()
  private over: boolean = false;


  @Output()
  private next = new EventEmitter<Number>();

  pageHandler(nextNumber) {
    const next = this.page + nextNumber;
    if (next < 1) return;
    if (nextNumber > 0 && this.over) return;//如果选择的是下一页 并且 over=true(最后一页) 返回
    this.page = next;
    this.next.emit(next);
  }

  ngOnInit() {
  }

}
