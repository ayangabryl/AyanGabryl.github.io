import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private activeSectionSource = new BehaviorSubject<string>('intro');
  currentActiveSection = this.activeSectionSource.asObservable();

  constructor() {}

  setActiveSection(sectionId: string) {
    this.activeSectionSource.next(sectionId);
  }
}