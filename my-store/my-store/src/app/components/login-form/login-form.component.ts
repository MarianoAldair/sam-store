import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { UsersService } from '../../services/users.service'
import { UserDto } from 'src/app/dtos/post.user.dto';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private authServ: AuthService,
    private userServ: UsersService
  ) {}
  
  login() {
    this.authServ.login('jorge@mail.com', 'jorgefeliz')
    .subscribe(access => {
      console.log(access.access_token)
    })
  }

  createUser() {
    const newUser: UserDto = {
      name: 'Jorge',
      email: 'jorge@mail.com',
      password: 'jorgefeliz'
    }
    this.userServ.create(newUser)
    .subscribe(user => {
      console.log('¡Creación de usuario exitosa!:', user)
    })
  }
}
