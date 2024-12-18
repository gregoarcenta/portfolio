import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-abilities',
  imports: [NgOptimizedImage, TranslatePipe],
  templateUrl: './abilities.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col justify-center items-center',
  },
})
export class AbilitiesComponent {
  public abilities = signal<string[]>([
    'html',
    'css',
    'js',
    'ts',
    'tailwind',
    'bootstrap',
    'angular',
    'react',
    'node',
    'git',
    'java',
    'postgresql',
    'docker',
  ]);
}
