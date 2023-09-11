import { Component, OnInit, ViewChild } from '@angular/core';
import { StockViewComponent } from '../stock-view/stock-view.component';
import { DashoardService, Dashboard } from '../dashoard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mr-monorepo-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  @ViewChild('stock') stock!: StockViewComponent;

  constructor(
    private dashboardService: DashoardService,
    private activatedRoute: ActivatedRoute
  ) {}

  dashboard!: Dashboard | undefined;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id']);
      this.loadDashboardById(params['id']);
    });
  }

  loadDashboardById(id: string) {
    this.dashboardService.getDashboardById(id).subscribe((data: Dashboard) => {
      this.dashboard = data;
    });
  }
}
