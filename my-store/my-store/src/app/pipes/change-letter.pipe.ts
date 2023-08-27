import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeLetter'
})
export class ChangeLetterPipe implements PipeTransform {

  transform(value: string): string {
    let changed = value.split('');
    for(let i = 0; i < changed.length; i++) {
      switch (changed[i]) {
        case 'a':
          let charA = changed[i];
          changed.splice(changed.indexOf(charA), 1, '4')
          break;
        case 'e':
          let charE = changed[i];
          changed.splice(changed.indexOf(charE), 1, '3')
          break;
        case 'i':
          let charI = changed[i];
          changed.splice(changed.indexOf(charI), 1, '1')
          break;
        case 'o':
          let charO = changed[i];
          changed.splice(changed.indexOf(charO), 1, '0')
          break;
        case 'u':
          let charU = changed[i];
          changed.splice(changed.indexOf(charU), 1, '7')
          break;
      }
    }
    return changed.join('');
  }

}
