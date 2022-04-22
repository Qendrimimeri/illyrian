import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any;

  constructor(private auth : AuthService, private router : Router) {

   }

  ngOnInit(): void {
  }

  loginUser(item:any) {
    this.data = item;
    if (this.data.valid) {
      this.auth.login(this.data).subscribe(
        (result) => {
          this.router.navigate(['admin/sidebar'])
        },
        (err: Error) => {
          alert(err.message)
        }
      );
    }
    console.warn(this.data)
  }
}
