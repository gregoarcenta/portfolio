import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import copy from 'copy-to-clipboard';
import Toastify from 'toastify-js';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-links-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './links-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksFooterComponent {
  public email = signal<string>('gregoarcenta@gmail.com');

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

    if (hasBeenCopy) {
      Toastify({
        text: '¡Correo electrónico copiado!',
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
  }
}
