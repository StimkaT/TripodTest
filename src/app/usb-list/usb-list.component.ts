import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IUsb } from '../data/config.reducer';

@Component({
  selector: 'app-usb-list',
  standalone: true,
  imports: [MatIconModule, MatCardModule],
  templateUrl: './usb-list.component.html',
  styleUrl: './usb-list.component.scss'
})
export class UsbListComponent {
  @Input() usbList: IUsb[] | null = [];

  @Output() emitter = new EventEmitter();

  displayedColumns: string[] = ['name', 'actions', 'status'];

  buttonClick(message: string, note: any = {}) {
    this.emitter.emit({
      event: 'UsbListComponent:BUTTON_CLICKED',
      data: {message, note},
    });
}
}
