import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LinksFooterComponent } from '@/components/home/links-footer/links-footer.component';
import { TranslatePipe } from '@ngx-translate/core';
import { ResizeService } from '@/services/resize.service';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { AsyncPipe, NgClass } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [LinksFooterComponent, TranslatePipe, AsyncPipe, NgClass],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative',
    id: 'footer',
  },
})
export class FooterComponent {
  private currentRouteSubject = new BehaviorSubject<string>('');
  public currentRoute$ = this.currentRouteSubject.asObservable();
  public currentWidth$: Observable<number>;

  private readonly resizeService = inject(ResizeService);
  public readonly router = inject(Router);

  constructor() {
    this.currentWidth$ = this.resizeService.currentWidth;
    this.currentRouteSubject.next(this.router.url);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRouteSubject.next(event.urlAfterRedirects);
      });
  }
}
