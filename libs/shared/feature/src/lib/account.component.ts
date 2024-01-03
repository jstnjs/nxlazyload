import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bundleperf-account',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Account settings here..</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class AccountComponent {}
