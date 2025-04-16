import { Component } from '@angular/core';
import { BugFormComponent } from './components/bug-form/bug-form.component';
import { BugListComponent } from './components/bug-list/bug-list.component';

@Component({
  selector: 'app-root',
  imports: [BugFormComponent, BugListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'bug-tracker-frontend';
}