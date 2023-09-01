import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { UsersService } from '../../services/users.service'
import { UserDto } from 'src/app/dtos/post.user.dto';
import { User } from '../../models/user.model'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }
  
  // constructor(
  //   private authServ: AuthService,
  //   private userServ: UsersService
  // ) {}

  // accessToken = '';
  // activeUserSession: User = {
  //   id: '',
  //   email: '',
  //   name: '',
  //   password: ''
  // }

  // login() {
  //   this.authServ.loginAndGet('jorge@mail.com', 'jorgefeliz')
  //   .subscribe(user => {
  //     this.activeUserSession = user;
  //   })
  // }

  // createUser() {
  //   const newUser: UserDto = {
  //     name: 'Jorge',
  //     email: 'jorge@mail.com',
  //     password: 'jorgefeliz'
  //   }
  //   this.userServ.create(newUser)
  //   .subscribe(user => {
  //     console.log('¡Creación de usuario exitosa!:', user)
  //   })
  // }

  // ngOnInit(): void {
    
  // }

  //Working on a RectiveForm under this comment line:
  // form = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.maxLength(5)] ),
  //   lastName: new FormControl(''),
  //   email: new FormControl('', [Validators.required]),
  //   phone: new FormControl(''),
  //   color: new FormControl(''),
  //   date: new FormControl(''),
  //   number: new FormControl(''),
  //   range: new FormControl(''),
  //   url: new FormControl(''),
  //   comment: new FormControl(''),
  //   food: new FormControl(''),
  //   genre: new FormControl(''),
  //   agree: new FormControl(false),
  //   ageRange: new FormControl(''),
  //   country: new FormControl(''),
  //   preferences: new FormControl('')
  // }); 

  private buildForm() {
    this.form = this.formBuilder.group({ 
      name: ['', [Validators.required, Validators.maxLength(5)]],
      lastName: [''],
      email: ['', Validators.required],
      phone: [''],
      color: [''],
      date: [''],
      number: [''],
      range: [''],
      url: [''],
      comment: [''],
      food: [''],
      genre: [''],
      agree: [''],
      ageRange: [''],
      country: [''],
      preferences: [''],
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  get lastNameField() {
    return this.form.get('lastName');
  }

  get emailField() {
    return this.form.get('email');
  }

  get phoneField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get numberField() {
    return this.form.get('number');
  }

  get rangeField() {
    return this.form.get('range');
  }

  get urlField() {
    return this.form.get('url');
  }

  get commentField() {
    return this.form.get('comment');
  }

  get foodField() {
    return this.form.get('food');
  }

  get genreField() {
    return this.form.get('genre');
  }

  get agreeField() {
    return this.form.get('agree');
  }

  get ageRangeField() {
    return this.form.get('ageRange');
  }

  get countryField() {
    return this.form.get('country');
  }

  get preferencesField() {
    return this.form.get('preferences');
  }

  save(event: any) {
    console.log(this.form.value)
  }
  // nameField = new FormControl('', [Validators.required, Validators.maxLength(5)] );
  // lastNameField = new FormControl('');
  // emailField = new FormControl('');
  // phoneField = new FormControl('')
  // colorField = new FormControl('');
  // dateField = new FormControl('');
  // numberField = new FormControl('');
  // rangeField = new FormControl('');
  // urlField = new FormControl('');
  // commentField = new FormControl('');
  // foodField = new FormControl('');
  // genreField = new FormControl('');
  // agreeField = new FormControl(false);
  // ageRangeField = new FormControl('');
  // countryField = new FormControl('');
  // preferencesField = new FormControl('');

  toggleState = false;

  toggleStateChange() {
    this.toggleState = !this.toggleState;
  }

  getNameValue() {
    // console.log(this.nameField.value);
  }
}
