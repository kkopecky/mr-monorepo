import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { StockViewComponent } from './stock-view/stock-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgIconsModule } from '@ng-icons/core';
import { heroPencilSquare, heroTrash } from '@ng-icons/heroicons/outline';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    NgIconsModule.withIcons({ heroPencilSquare, heroTrash }),
  ],
  declarations: [
    DashboardListComponent,
    DashboardViewComponent,
    StockViewComponent,
  ],
  exports: [DashboardListComponent, DashboardViewComponent, StockViewComponent],
})
export class UiModule {}
