import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinksFooterComponent } from '@/components/home/links-footer/links-footer.component';

@Component({
  selector: 'app-footer',
  imports: [LinksFooterComponent],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative',
  },
})
export class FooterComponent {}
