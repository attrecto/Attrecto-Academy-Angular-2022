import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Badge } from '../classes/Badge';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  constructor(private httpClient: HttpClient) {
  }

  getBadges(): Observable<Badge[]> {
    return this.httpClient.get<Badge[]>(environment.apiUrl + '/badges');
  }
}
