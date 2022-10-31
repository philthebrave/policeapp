import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Force } from '../interface/force';

@Injectable({
  providedIn: 'root'
})
export class ForceService {

  constructor(private http: HttpClient) { }

  getForces(): Observable<Force[]> {
    return this.http.get<Force[]>('https://data.police.uk/api/forces')
  }

}
