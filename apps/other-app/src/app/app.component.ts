import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'bundleperf-root',
  template: `<bundleperf-nx-welcome></bundleperf-nx-welcome>
    <router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {
  title = 'other-app';
}
