import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:3000/pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    const result = this.httpClient.get(baseURL);
    return result
  }

  read(id: any): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`)
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(baseURL, data)
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data)
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`)
  }
  
}
