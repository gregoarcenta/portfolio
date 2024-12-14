import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

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
    const email = 'gregoarcenta@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      alert('Correo copiado al portapapeles');
    });
  }
}
