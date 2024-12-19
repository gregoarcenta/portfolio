import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-certifications',
  imports: [TranslatePipe, NgOptimizedImage],
  templateUrl: './certifications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent {
  public certificates = signal([
    {
      name: 'Angular Pro',
      imageUrl: 'assets/images/angular.webp',
      pdfUrl: 'https://cursos.devtalles.com/certificates/1h2qsyn0vq',
    },
    {
      name: 'RxJs',
      imageUrl: 'assets/images/rxjs.webp',
      pdfUrl: 'https://cursos.devtalles.com/certificates/jcqu0uprib',
    },
    {
      name: 'Nest Js',
      imageUrl: 'assets/images/nestjs.webp',
      pdfUrl: 'https://cursos.devtalles.com/certificates/kwufposps0',
    },
    {
      name: 'SQL de cero',
      imageUrl: 'assets/images/docker.webp',
      pdfUrl: 'https://cursos.devtalles.com/certificates/o7c6td1t9r',
    },
    {
      name: 'Docker',
      imageUrl: 'assets/images/sql.webp',
      pdfUrl: 'https://cursos.devtalles.com/certificates/tdzancnnys',
    },
  ]);
}
