import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siginwith',
  templateUrl: './siginwith.component.html',
  styleUrls: ['./siginwith.component.css']
})
export class SiginwithComponent implements OnInit {
  statusMsg = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  siginInUp(){
    this.authService.SignInUpWithGoogle().then(()=>{

    this.statusMsg = 'Logged in';
    this.router.navigate(['/']);
    })
  }
}
