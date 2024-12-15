import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-content',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './profile-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col xl:flex-row',
  },
})
export class ProfileContentComponent {
  public imageProfile = signal('/assets/images/profile.jpg');
}
