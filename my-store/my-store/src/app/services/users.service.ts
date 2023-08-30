import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserDto } from '../dtos/post.user.dto'
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/users'

  getAll() {
    return this.http.get<User[]>(this.apiUrl)
  }

  create(user: UserDto) {
    return this.http.post<User>(this.apiUrl, user)
  }
}
