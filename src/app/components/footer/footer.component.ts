import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LinksFooterComponent } from '@/components/home/links-footer/links-footer.component';
import { TranslatePipe } from '@ngx-translate/core';
import { ResizeService } from '@/services/resize.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [LinksFooterComponent, TranslatePipe, AsyncPipe],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative',
    id: 'footer',
  },
})
export class FooterComponent {
  public currentWidth$: Observable<number>;
  private readonly resizeService = inject(ResizeService);

  constructor() {
    this.currentWidth$ = this.resizeService.currentWidth;
  }
}
