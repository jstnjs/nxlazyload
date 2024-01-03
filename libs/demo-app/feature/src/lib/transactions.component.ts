import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bundleperf-transactions',
  standalone: true,
  imports: [CommonModule],
  template: `<p>All bank transactions here..</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class TransactionsComponent {}
