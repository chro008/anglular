import { Component, OnInit } from '@angular/core';

import {List} from './list';
import {ListService} from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private listService: ListService,
  ) { }

  list:List[];
  public activePage: number = 1;
  errorMessage: string;

  getList(pageSize:number = 1) {
    this.activePage = ~~pageSize? pageSize: 1;
    this.listService.getList(this.activePage)
      .subscribe(
        res => {
          if (res&& res.list){
            this.list = res.list;
          }
        },
        error => {
          this.errorMessage = error.json().message
        }
      )
  }

  ngOnInit() {
    this.getList(1);
  }

}
