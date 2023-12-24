import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {TREE_DATA, ExampleFlatNode, FoodNode} from '../data/EquipmentСatalog'




@Component({
  selector: 'app-all-category',
  standalone: true,
  imports: [CommonModule, MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './all-category.component.html',
  styleUrl: './all-category.component.scss'
  
})

export class AllCategoryComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}

