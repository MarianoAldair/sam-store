import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { tap } from 'rxjs/operators'
import { TokenService } from '../services/token.service'
import { switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenServ: TokenService
  ) { }

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/auth'

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password})
    .pipe(
      tap(response => this.tokenServ.saveToken(response.access_token))
    )
  }

  activeProfile() {
    // const headers = new HttpHeaders();
    // headers.set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(`${this.apiUrl}/profile`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    });
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(response => this.activeProfile())
    )
  }
}
