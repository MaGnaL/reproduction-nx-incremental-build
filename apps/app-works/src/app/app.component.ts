import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Lib1Component } from '@latest-ws/lib1';
import { Sub1Module } from '@latest-ws/lib1/sub1';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, Lib1Component, Sub1Module],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-works';
}
