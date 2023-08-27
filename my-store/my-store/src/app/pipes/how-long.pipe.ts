import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'howLong'
})
export class HowLongPipe implements PipeTransform {

  transform(value: string): string {
    return value;
  }

}
