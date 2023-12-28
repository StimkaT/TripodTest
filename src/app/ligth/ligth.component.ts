import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { interval, Subscription } from 'rxjs';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-ligth',
  standalone: true,
  imports: [MatIconModule, MatGridListModule, NgStyle],
  templateUrl: './ligth.component.html',
  styleUrl: './ligth.component.scss'
})
export class LigthComponent {
  light = false

  private subscription!: Subscription;

  blink(): void {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    } else {
      this.subscription = interval(2000).subscribe(() => {
        this.light = !this.light
      });
    }
  }
}
