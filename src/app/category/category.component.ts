import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';



@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

}
