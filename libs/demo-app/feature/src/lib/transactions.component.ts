import { Component } from '@angular/core';

@Component({
  selector: 'bundleperf-transactions',
  standalone: true,
  template: `<p>All bank transactions here..</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class TransactionsComponent {}
