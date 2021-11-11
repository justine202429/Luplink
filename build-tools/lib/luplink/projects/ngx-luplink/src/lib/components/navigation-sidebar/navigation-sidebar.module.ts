import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { NavigationSidebarComponent } from './navigation-sidebar.component';

@NgModule({
  declarations: [NavigationSidebarComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule],
  exports: [NavigationSidebarComponent],
})
export class NavigationSidebarModule {}
