import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatterSex',
})
export class FormatterSexPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value === '1') {
      return '男';
    } else if (value === '0') {
      return '女';
    } else {
      return '太监';
    }
  }
}
