import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IMAGE_LOADER,
  ImageLoaderConfig,
  NgOptimizedImage,
} from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  imports: [NgOptimizedImage, RouterLink, TranslatePipe],
  templateUrl: './profile.component.html',
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://res.cloudinary.com/dy7luvgd5/image/upload/v1735063243/portfolio/${config.src}`;
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
  public imageProfile = signal('profile.jpg');

  openCV() {
    const pdfUrl = 'assets/documents/cv.pdf';
    window.open(pdfUrl, '_blank');
  }
}
