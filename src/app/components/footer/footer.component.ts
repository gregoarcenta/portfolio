import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinksFooterComponent } from '@/components/home/links-footer/links-footer.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [LinksFooterComponent, TranslatePipe],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative',
    id: 'footer',
  },
})
export class FooterComponent {}
