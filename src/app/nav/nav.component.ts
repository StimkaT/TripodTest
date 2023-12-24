import { CommonModule } from '@angular/common';
import { Component,  EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchComponent} from '../search/search.component';
import {MatMenuModule} from '@angular/material/menu';



@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, SearchComponent, MatMenuModule],
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
