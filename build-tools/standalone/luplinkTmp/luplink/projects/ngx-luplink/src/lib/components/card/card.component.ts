import { Component, Input } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public styleClass: string = '';

  @Input() title?: string;

  @Input() public isWide?: boolean = false;

  faAngleDown = faAngleDown;

  public collapsed: boolean = false;

  collapseCard() {
    this.collapsed = !this.collapsed;
  }
}
