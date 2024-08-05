import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public apiUrl = environment.apiUrl
  public userId:any


  constructor(private httpClient:HttpClient) { }

  onCreateUser(user:any) :Observable<any> {
    return this.httpClient.post(`${this.apiUrl}api/user/registration`,user)

  }

  loginUser(loginDetails:any) :Observable<any>{
    return this.httpClient.post(`${this.apiUrl}api/user/login`,loginDetails)

  }

  userDetails(): Observable<any> {
    let id = this.getUserId()
    console.log( this.getUserId())
    return this.httpClient.get(`${this.apiUrl}api/user/getUser/${id}`)
  }

  getUserId(){
    this.userId =  localStorage.getItem("userId")
    return this.userId
  }
}
