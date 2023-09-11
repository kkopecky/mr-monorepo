import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Dashboards = {
  dashboards: Dashboard[];
};

export interface Dashboard {
  id: number;
  name: string;
  stocks: string[];
}

@Injectable({
  providedIn: 'root',
})
export class DashoardService {
  private URL = 'http://localhost:3000/api/dashboards';
  constructor(private httpClient: HttpClient) {}

  getDashboards(): Observable<Dashboards> {
    return this.httpClient.get<Dashboards>(this.URL);
  }

  getDashboardById(id: string): Observable<Dashboard> {
    return this.httpClient.get<Dashboard>(`${this.URL}/${id}`);
  }
}
