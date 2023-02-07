import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';   
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class PortfolioUiService {

  url = 'https://localhost:7223';  
  constructor(private http: HttpClient) { }  
  getPortfolioDetails(): Observable<any> {  
    return this.http.get<any>(this.url + '/rebalance');  
  }  
}
