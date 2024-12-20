import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import copy from 'copy-to-clipboard';
import Toastify from 'toastify-js';
import { RouterLink } from '@angular/router';
import { _, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-links-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './links-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksFooterComponent {
  public email = signal<string>('gregoarcenta@gmail.com');
  private readonly translate = inject(TranslateService);

  copyEmail() {
    const hasBeenCopy = copy(this.email());
    const btnSuccess = document.getElementById('success-icon')!;
    const defaultIcon = document.getElementById('default-icon')!;

    defaultIcon.classList.add('hidden');
    btnSuccess.classList.remove('hidden');

    setTimeout(() => {
      defaultIcon.classList.remove('hidden');
      btnSuccess.classList.add('hidden');
    }, 3000);

    this.translate
      .get(_(`footer.emailCopied`))
      .pipe(take(1))
      .subscribe((message: string) => {
        if (hasBeenCopy) {
          Toastify({
            text: message,
            duration: 3000,
            gravity: 'bottom',
            position: 'center',
            stopOnFocus: true,
            className: 'flex flex-row-reverse text-gray-800 text-lg rounded-lg',
            style: {
              background: '#ffffff',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            },
          }).showToast();
        }
      });
  }
}
