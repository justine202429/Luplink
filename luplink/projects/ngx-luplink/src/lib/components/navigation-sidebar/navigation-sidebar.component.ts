import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Inject, Input } from '@angular/core';
import { faAngleDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ENVIRONMENT_TOKEN } from '../../shared/dependencies';

// import packageInfo from '../../../../package.json';

@Component({
  selector: 'lib-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.scss'],
  animations: [
    trigger('panelInOut', [
      transition('void => *', [style({ transform: 'translateY(-100%)' }), animate(100)]),
      transition('* => void', [animate(100, style({ transform: 'translateY(-100%)' }))]),
    ]),
  ],
})
export class NavigationSidebarComponent {
  @Input() public currentComponent: string = 'geometry';
  constructor(@Inject(ENVIRONMENT_TOKEN) private environment: any) {
    // console.log(environment);
  }
  public collapseUplink: boolean = true;
  public collapseDownlink: boolean = true;

  public mail = faEnvelope;
  public collapsed: boolean = false;
  public showAbout: boolean = false; //Controls the visibility of 'about' modal
  // version = packageInfo.version;
  version = this.environment.version;
  faAngleDown = faAngleDown;

  switchTemplate(name: string) {
    this.currentComponent = name;
  }
  collapseSidebar() {
    this.collapsed = !this.collapsed;
  }
}
