import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatterDate',
})
export class FormatterDatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
