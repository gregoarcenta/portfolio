import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-profile-content',
  imports: [NgOptimizedImage, RouterLink, TranslatePipe],
  templateUrl: './profile-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .h1-color {
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background: linear-gradient(135deg, #f2c511, #eeeeee);
    }
  `,
})
export class ProfileContentComponent {
  public imageProfile = signal('/assets/images/profile.jpg');

  openCV() {
    const pdfUrl = 'assets/documents/cv.pdf';
    window.open(pdfUrl, '_blank');
  }
}
