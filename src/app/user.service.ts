import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pager } from './models/pager';

@Injectable()
export class UserService {
  url:string= "https://reqres.in/api/users";
  constructor(private http: HttpClient) { }

  getAll(pager: Pager){
    let Params = new HttpParams();
    Params = Params.append('page', String(pager.page+1));
      return this.http.get(this.url, { params: Params } );
  }
  getUser(id: number){
    return this.http.get(this.url+"/"+id);
   }

}
