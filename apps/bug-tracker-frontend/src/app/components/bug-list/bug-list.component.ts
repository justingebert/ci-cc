import { Component, OnInit, inject } from '@angular/core';
import { Bug } from '../../models/bug.model';
import { BugService } from '../../services/bug.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss'],
  standalone: true,
  imports: [CommonModule, DatePipe],
})
export class BugListComponent {
  private bugService = inject(BugService);
  bugs = this.bugService.getBugs();
}