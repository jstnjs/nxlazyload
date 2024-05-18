import { Component } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'bundleperf-cards',
  standalone: true,
  template: `<p>All bank cards here..</p>
    {{ date }}`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class CardsComponent {
  date = DateTime.now();
}
