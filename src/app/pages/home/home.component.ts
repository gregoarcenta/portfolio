import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinksFooterComponent } from '@/components/home/links-footer/links-footer.component';
import { AbilitiesComponent } from '@/components/home/abilities/abilities.component';
import { ExperienceComponent } from '@/components/home/experience/experience.component';
import { ProfileComponent } from '@/components/home/profile/profile.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ProfileComponent,
    AbilitiesComponent,
    ExperienceComponent,
    LinksFooterComponent,
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: { class: 'block h-full p-5 pb-0' },
  styles: `
    .pulse-button {
      position: fixed;
      bottom: 20px;
      left: calc(50% - 32px);
      padding: 10px 20px;
      color: white;
      font-size: 16px;
      cursor: pointer;
      animation: pulseAnimation 1.8s ease-out;
    }

    @keyframes pulseAnimation {
      0% {
        transform: scale(1);
        background-color: #e3e3e3;
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  `,
})
export default class HomeComponent {
  /*scrollToSection(): void {
    const element = document.getElementById('targetSection');
    if (element) {
      const headerHeight = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }*/
}
