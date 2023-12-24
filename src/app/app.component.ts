import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AllCategoryComponent } from './all-category/all-category.component';
import {MatTreeModule} from '@angular/material/tree';
import { SearchComponent } from './search/search.component';
// import {TREE_DATA, ExampleFlatNode, FoodNode} from '../data/technick'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, AllCategoryComponent, MatTreeModule, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EquipmentRental';
}



