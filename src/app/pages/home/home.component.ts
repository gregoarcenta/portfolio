import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { ProfileComponent } from '@/components/home/profile/profile.component';
import { AbilitiesComponent } from '@/components/home/abilities/abilities.component';
import { ExperienceComponent } from '@/components/home/experience/experience.component';
import { LinksFooterComponent } from '@/components/home/links-footer/links-footer.component';
import { initTooltips } from 'flowbite';
import { CertificationsComponent } from '@/components/home/certifications/certifications.component';
import { ResizeService } from '@/services/resize.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ProfileComponent,
    AbilitiesComponent,
    ExperienceComponent,
    LinksFooterComponent,
    CertificationsComponent,
    AsyncPipe,
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: { class: 'block h-full p-5 pb-0' },
})
export default class HomeComponent implements AfterViewInit {
  public currentWidth$: Observable<number>;

  private readonly resizeService = inject(ResizeService);

  constructor() {
    this.currentWidth$ = this.resizeService.currentWidth;
  }

  ngAfterViewInit(): void {
    setTimeout(() => initTooltips(), 500);
  }
}
