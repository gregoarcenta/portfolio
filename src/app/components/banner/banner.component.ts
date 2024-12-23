import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { BannerService } from '@/services/banner.service';

@Component({
  selector: 'app-banner',
  imports: [TranslatePipe],
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
  private readonly bannerService = inject(BannerService);

  onCloseBanner() {
    this.bannerService.hideBanner();
  }
}
