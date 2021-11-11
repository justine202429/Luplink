import { Component } from '@angular/core';
import { FormsTemplate } from './models/FormsTemplate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Luplink';
  template = FormsTemplate.geometry;

  validity = {
    steps: {
      geometry: 'none',
      uplink: 'none',
      downlink: 'none',
      results: 'none',
    },
  };
}
