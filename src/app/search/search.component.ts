import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

}
