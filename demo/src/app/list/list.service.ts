import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class ListService {

  constructor(private http: Http) {
  }

  private listUrl = "/api";

  getList(pageSize): Observable<any> {
    return this.http.get(`${this.listUrl}/getList?page=${pageSize}`)
      .map(this.extractData)
      .catch(this.handleError)
  }

  delete(id: number) {
    return this.http.delete(`${this.listUrl}/delete/${id}`)
      .catch(this.handleError);
  }

  public extractData(res: Response) {

    if (res.status != 204) {
      return res.json() || {};
    }
    return {}
  }

  private handleError(error: any) {
    return Observable.throw(error || '服务器错误')
  }

}
