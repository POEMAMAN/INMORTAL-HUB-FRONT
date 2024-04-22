import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  register(user: any) {
    return this.http.post('https://importal-hub-back-a54zucve2-inmortal-hubs-projects.vercel.app/api/users/register', user)
  }
  confirmUser(token: string){
    return this.http.get(`https://importal-hub-back-a54zucve2-inmortal-hubs-projects.vercel.app/api/users/confirm-user/${token}`)
  }
  login(user: any) {
    return this.http.post('https://importal-hub-back-a54zucve2-inmortal-hubs-projects.vercel.app/api/users/login',user)
  }
  // logout() {
  //   return this.http.get('https://importal-hub-back-a54zucve2-inmortal-hubs-projects.vercel.app/api/users/logout')
  // }

  logout(): void {
    sessionStorage.removeItem('token-app'); 
    this.router.navigate(['/main']);
  }

  isAdmin(): Observable<boolean> {
    return this.http.get<boolean>('https://importal-hub-back-a54zucve2-inmortal-hubs-projects.vercel.app/api/users/is-admin')
  }


}
