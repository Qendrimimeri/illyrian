import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kurset } from './../interface/kurset';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KursetService {

  constructor(private httpClient : HttpClient) { }

  createKurs(kursBody : any) : Observable<Kurset> {

    const kursUrl = 'http://localhost:3000/kurset';
    return this.httpClient.post<Kurset >(kursUrl, kursBody);
  }

  viewKurs(kursId : any): Observable<Kurset> {

    const kursUrl = 'http://localhost:3000/kurs/'+kursId;
    return this.httpClient.get<Kurset>(kursUrl);
  }

  getAllKurst(): Observable<Kurset> {

    const kursUrl = 'http://localhost:3000/kurset';
    return this.httpClient.get<Kurset>(kursUrl);
  }


  updateKurs(kursBody : any, kursetId : any): Observable<Kurset> {

    const kursUrl = 'http://localhost:3000/kurset/'+ kursetId;
    return this.httpClient.put<Kurset>(kursUrl, kursBody);
  }


  deleteKurs(kursId : any): Observable<Kurset> {

    const kursUrl = 'http://localhost:3000/kurset/'+ kursId ;
    return this.httpClient.delete<Kurset>(kursUrl);
  }
}
