import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser, RegisterUser, User } from '../types/food.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  
  loginUser(data : LoginUser) : Observable<any>{
    return this.http.post<any>('https://google-solutions-backend.onrender.com/auth/login',data)
  }

  registerUser(data : RegisterUser ) : Observable<any>{
    return this.http.post<any>('https://google-solutions-backend.onrender.com/auth/register',data)
  }

  getUser(id : String ) : Observable<User>{
    return this.http.get<User>('https://google-solutions-backend.onrender.com/auth/user/'+id)
  }
  verifyUser(token : String) : Observable<any> {
    return this.http.get<any>('https://google-solutions-backend.onrender.com/auth/verify/'+token)
  }
}
