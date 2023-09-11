import { Component, OnInit } from '@angular/core';
import { Dashboard, Dashboards, DashoardService } from '../dashoard.service';

@Component({
  selector: 'mr-monorepo-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss'],
})
export class DashboardListComponent implements OnInit {
  constructor(private dashboardService: DashoardService) {}

  dashboards: Dashboard[] = [];

  ngOnInit() {
    this.loadDashboardList();
  }

  loadDashboardList() {
    this.dashboardService.getDashboards().subscribe((data: Dashboards) => {
      this.dashboards = data.dashboards;
    });
  }
}
