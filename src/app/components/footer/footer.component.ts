import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import Toastify from 'toastify-js';
import copy from 'copy-to-clipboard';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative',
  },
})
export class FooterComponent {
  public email = signal<string>('gregoarcenta@gmail.com');

  copyEmail() {
    const hasBeenCopy = copy(this.email());

    if (hasBeenCopy) {
      Toastify({
        text: '¡Correo electrónico copiado!',
        duration: 3000,
        gravity: 'bottom',
        position: 'center',
        stopOnFocus: true,
        className: 'flex flex-row-reverse text-gray-800 text-lg',
        style: {
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      }).showToast();
    }
  }
}
