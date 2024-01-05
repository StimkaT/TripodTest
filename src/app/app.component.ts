import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MatTreeModule } from '@angular/material/tree';
import { LigthCopyComponent } from './light/ligth.component';
// import { ControlButtonsComponent } from './control-buttons/control-buttons.component';
import { SpeedControlComponent } from './speed-control/speed-control.component';
import { FooterComponent } from './footer/footer.component';
import { UsbListComponent } from './usb-list/usb-list.component';
// import {TREE_DATA, ExampleFlatNode, FoodNode} from '../data/technick'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, MatTreeModule, LigthCopyComponent, SpeedControlComponent, FooterComponent, UsbListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TripodV1';

  events($event:any) {
    if ($event.event === 'LigthCopyComponent:buttonClick' && $event.data === 'switch') {
      console.log('switch', $event);
    } else if ($event.event === 'LigthCopyComponent:buttonClick' && $event.data === 'blink') {
      console.log('blink', $event);
    }
  }
}



