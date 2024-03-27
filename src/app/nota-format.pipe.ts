import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notaFormat'
})
export class NotaFormatPipe implements PipeTransform {
  transform(nota: number): string {
    return nota.toFixed(2);
  }
}
