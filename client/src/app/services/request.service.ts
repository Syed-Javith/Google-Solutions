import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Request } from '../types/food.types';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http : HttpClient) { }

  getRequests() : Observable<Request[]> {
    return this.http.get<Request[]>('https://google-solutions-backend.onrender.com/request')
  } 
  VolunteerTakeRequest(data : any) : Observable<any>{
    return this.http.patch<any>('https://google-solutions-backend.onrender.com/request',data)
  }
  VolunteerEnterToken(data : any) : Observable<any> {
    return this.http.put<any>('https://google-solutions-backend.onrender.com/request',data)
  }
  makeRequestForFood(data : any) : Observable<any> {
    return this.http.post<any>( 'https://google-solutions-backend.onrender.com/request' , data)
  }
}
