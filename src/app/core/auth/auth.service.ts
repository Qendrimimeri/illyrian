import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(data: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router) {}

}
