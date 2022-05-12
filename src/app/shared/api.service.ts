import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //POST method (create ny konsult modal)
  postKonsult(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res: any)=> {
        return res;
      }))
  }
  // POST bonus method (Bonus modal)
  postKonsultBonusDetails(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  //GET method
  getKunsult() {
    return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  //UPDATE method
  updateKunsult(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  //DELETE method
  deleteKunsult(id: number) {
    return this.http.delete<any>("http://localhost:3000/posts/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
