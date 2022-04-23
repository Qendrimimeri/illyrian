import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regjister',
  templateUrl: './regjister.component.html',
  styleUrls: ['./regjister.component.scss']
})
export class RegjisterComponent implements OnInit {

  public signUpForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      emri:[''],
      mbiemri:[''],
      email:[''],
      password: [''],
      nrTel:[''],
      drejtimi:[''],
      regjioni:[''],
      gjinia:[''],
    })
  }
  signUp (){
    this.http.post<any>('http://localhost:3000/Studentat', this.signUpForm.value)
    .subscribe(res => {
      alert('U Regjistruat me Sukses');
      this.signUpForm.reset();
      this.router.navigate(['login']);
    }, err => {
      alert("Ka Probleme me regjistrim");
    })
  }
}
