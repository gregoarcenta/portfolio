import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  private shownSubject = new BehaviorSubject<boolean>(false);
  public bannerClosed = signal<boolean>(false);

  get show$() {
    return this.shownSubject.asObservable();
  }

  showBanner() {
    if (!this.bannerClosed()) this.shownSubject.next(true);
  }

  hideBanner() {
    this.bannerClosed.set(true);
    this.shownSubject.next(false);
  }
}
