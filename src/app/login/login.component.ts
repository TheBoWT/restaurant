import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  statusMsg = '';
  user;
  formData: FormGroup;
  constructor(public authService: AuthService, private fb: FormBuilder, private router: Router) {}


   ngOnInit() {
    this.authService.user.subscribe(user=>{
      this.user = user;
    });

    this.formData = this.fb.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSiginIn(){
    let email = this.formData.get('email').value;
    let password = this.formData.get('password').value;
    this.authService.SignInWithEmailAndPassword(email, password).then(()=>{
    this.statusMsg = 'Logged in';
    this.router.navigate(['/']);
    })
  }
}
