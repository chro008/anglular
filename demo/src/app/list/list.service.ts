import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ListService {

  constructor(private http: Http) { }

  private listUrl = "/api/getList";

  getList (pageSize): Observable<any>{
    return this.http.get(`${this.listUrl}?page=${pageSize}`)
      .map(this.extractData)
      .catch(this.handleError)
  }

  public extractData(res: Response) {

    // 存在总数限制，通知其他组件
    const total = res.headers.get('total')

    if (res.status != 204) {
      return {list: res.json(), total: ~~total} || {};
    }
    return {}
  }

  private handleError (error: any){
    return Observable.throw(error || '服务器错误')
  }

}
