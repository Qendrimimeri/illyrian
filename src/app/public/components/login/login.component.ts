import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
  public logInForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      email: [''],
      password : ['']
    })
  }
  logIn (){
    this.http.get<any>('http://localhost:3000/Studentat')
    .subscribe(res => {
      const user = res.find((a:any) => {
        return a.email === this.logInForm.value.email && a.password === this.logInForm.value.password
      });
      if (user) {
        alert('Jeni Kyqur me sukses');
        this.logInForm.reset();
        this.router.navigate(['admin']);
      }
      else{
        alert('Perdorusi nuk egziston');
      }
    }, err => {
      alert('diqka ka shku keq i nderun');
    })
  }
}
