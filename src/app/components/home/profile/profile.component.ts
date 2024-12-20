import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  imports: [NgOptimizedImage, RouterLink, TranslatePipe],
  templateUrl: './profile.component.html',
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        placeholderResolution: 40,
      },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .h1-color {
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background: linear-gradient(135deg, #f2c511, #a2a2a2);
    }
  `,
})
export class ProfileComponent {
  public imageProfile = signal('/assets/images/profile.jpg');

  openCV() {
    const pdfUrl = 'assets/documents/cv.pdf';
    window.open(pdfUrl, '_blank');
  }
}
