import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bundleperf-cards',
  standalone: true,
  imports: [CommonModule],
  template: `<p>All bank cards here..</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class CardsComponent {}
