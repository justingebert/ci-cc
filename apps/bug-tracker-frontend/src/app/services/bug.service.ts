import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from '../models/bug.model';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BugService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:3000/bugs';

  // Private signal for internal updates
  private bugsSignal = signal<Bug[]>([]);
  
  // Public readonly version for components to consume
  readonly bugs = this.bugsSignal.asReadonly();
  
  constructor() {
    this.refreshBugs();
  }
  
  refreshBugs(): void {
    this.http.get<Bug[]>(this.baseUrl).subscribe(bugs => {
      this.bugsSignal.set(bugs);
    });
  }

  getBugs() {
    return this.bugs;
  }

  addBug(bug: Omit<Bug, 'id' | 'createdAt'>): Observable<Bug> {
    return this.http.post<Bug>(this.baseUrl, bug).pipe(
      tap(() => {
        this.refreshBugs();
      })
    );
  }
}