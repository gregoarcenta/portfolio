import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinksFooterComponent } from '@/components/home/links-footer/links-footer.component';
import { ProfileContentComponent } from '@/components/home/profile-content/profile-content.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LinksFooterComponent, ProfileContentComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: { class: 'block h-full p-5 pb-0' },
})
export default class HomeComponent {}
