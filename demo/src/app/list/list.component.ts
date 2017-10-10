import {Component, OnInit} from '@angular/core';

import {List} from './list';
import {ListService} from './list.service';

@Component({
  selector: 'app-list',
  providers: [ListService],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService,) {
  }

  list: List[];
  fresh: boolean = false;
  public activePage: number = 1;
  public listOver: boolean = false;
  public totalNum: number = 0;
  errorMessage: string;

  getList(pageSize: number = 1) {
    this.fresh = true;
    this.activePage = ~~pageSize ? pageSize : 1;
    this.listService.getList(this.activePage)
      .subscribe(
        res => {
          this.fresh = false;
          if (res && res.list) {
            this.list = res.list;
            this.totalNum = res.total || 0;
            this.listOver = this.activePage * 10 >= res.total;
          }
        },
        error => {
          this.errorMessage = error.json().message
        }
      )
  }

  freshTbody() {

  }

  pageNext(page: number) {
    this.getList(page);
  }

  delete(id: number) {
    if (confirm("是否确认删除id是" + id + "的记录?")) {
      this.listService.delete(id)
        .subscribe(
          data => {
            console.log(data)
          },
          err => {
            console.log(err)
          },
          () => {
            console.log("Complete");
            if ((this.totalNum - 1) % 10 === 0) {
              this.activePage -= 1;
            }
            this.getList(this.activePage);
          }
        )
    }
  }

  ngOnInit() {
    this.getList(1);
  }

}
