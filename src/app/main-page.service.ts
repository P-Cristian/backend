import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  public showingModal = new BehaviorSubject<boolean>(true);
  showing$ = this.showingModal.asObservable();

  getShowing(): boolean {
    return this.showingModal.getValue();
  }

  setShowing(value: boolean) {
    this.showingModal.next(value);
  }
}
