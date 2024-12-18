import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { ProfileComponent } from '@/components/home/profile/profile.component';
import { AbilitiesComponent } from '@/components/home/abilities/abilities.component';
import { ExperienceComponent } from '@/components/home/experience/experience.component';
import { LinksFooterComponent } from '@/components/home/links-footer/links-footer.component';
import { initTooltips } from 'flowbite';
import { CertificationsComponent } from '@/components/home/certifications/certifications.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ProfileComponent,
    AbilitiesComponent,
    ExperienceComponent,
    LinksFooterComponent,
    CertificationsComponent,
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: { class: 'block h-full p-5 pb-0' },
})
export default class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => initTooltips(), 500);
  }
}
