import { Component } from '@angular/core';

import { TransactionListComponent } from './modules/transactions/transaction-list/transaction-list.component';

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  selector: 'app-root',
  imports: [TransactionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'budget-angular';
}
