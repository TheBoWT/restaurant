import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formData:FormGroup;
  statusMsg:string='';
  type:string = 'password';
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formData = this.fb.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      password:['']
    })
  }

  onSignup(){
    let email = this.formData.get('email').value;
    let password = this.formData.get('password').value;
    let firstName = this.formData.get('firstName').value;

    this.authService.SignUpWithEmailAndPassword(email, password, firstName).then(()=>{
      this.statusMsg = 'Account Created,  redirecting to Home  5 seconds';
       setTimeout(() => {
        this.router.navigate(['/'])
      }, 5000);
    })
  }

  showPassword(){
    this.type == 'password' ? this.type = 'text' : this.type = 'password';
  }

}
