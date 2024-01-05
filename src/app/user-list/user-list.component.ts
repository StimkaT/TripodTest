import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../data/config.reducer';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  @Input() users: IUser[] | null = [];
  @Output() emitter = new EventEmitter();

  buttonClicked(user: IUser) {
    this.emitter.emit({
      event: 'UsbListComponent:USER_CLICKED',
      data: 'USER_' + user.id,
    });
  }
}
