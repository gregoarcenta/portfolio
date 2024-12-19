import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  private screenWidth = new BehaviorSubject<number>(window.innerWidth);

  constructor() {
    window.addEventListener('resize', () => {
      this.screenWidth.next(window.innerWidth);
    });
  }

  get currentWidth() {
    return this.screenWidth.asObservable();
  }
}
