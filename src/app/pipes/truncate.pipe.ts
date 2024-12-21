import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxLength = 100, suffix = '...'): unknown {
    if (!value) {
      return '';
    }
    if (value.length > maxLength) {
      return value.slice(0, maxLength).trim() + suffix;
    }
    return value;
  }
}
