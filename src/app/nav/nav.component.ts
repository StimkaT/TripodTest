import { CommonModule } from '@angular/common';
import { Component,  EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { UserListComponent } from '../user-list/user-list.component';
import { AccountMenuComponent } from '../account-menu/account-menu.component';



@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatMenuModule, UserListComponent, AccountMenuComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Input() message: string = '';
  @Output() emitter = new EventEmitter();

  buttonClicked(note: string) {
    this.emitter.emit({
      event: 'NavPanelComponent:BUTTON_CLICKED',
      data: {note},
    });
  }
}
