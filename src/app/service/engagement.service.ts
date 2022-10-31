import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Engagement } from '../interface/engagement';

@Injectable({
  providedIn: 'root'
})
export class EngagementService {

  ext = '';

  constructor(private http: HttpClient) { }

  getEngagement(): Observable<Engagement> {
    return this.http.get<Engagement>('https://data.police.uk/api/forces/' + this.ext)
  }

}
