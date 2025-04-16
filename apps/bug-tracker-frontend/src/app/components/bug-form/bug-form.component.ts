import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BugService } from '../../services/bug.service';
import { Bug, Priority } from '../../models/bug.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class BugFormComponent {
  private fb = inject(FormBuilder);
  private bugService = inject(BugService);

  priorities = Object.values(Priority);

  form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    priority: ['', Validators.required],
  });

  submit(): void {
    const bugData = this.form.getRawValue() as Omit<Bug, 'id' | 'createdAt'>;

    if (this.form.valid) {
      this.bugService.addBug(bugData).subscribe(() => {
        this.form.reset();
      });
    }
  }
}