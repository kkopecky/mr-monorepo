import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { StockViewComponent } from './stock-view/stock-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [
    DashboardListComponent,
    DashboardViewComponent,
    StockViewComponent,
  ],
  exports: [DashboardListComponent, DashboardViewComponent, StockViewComponent],
})
export class UiModule {}
