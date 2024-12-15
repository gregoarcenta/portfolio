import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-abilities',
  imports: [NgOptimizedImage],
  templateUrl: './abilities.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col justify-center items-center',
  },
})
export class AbilitiesComponent {}
