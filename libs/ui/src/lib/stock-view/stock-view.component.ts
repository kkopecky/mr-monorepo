import { Component, Input } from '@angular/core';

@Component({
  selector: 'mr-monorepo-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.scss'],
})
export class StockViewComponent {
  @Input() stock!: string;
}
