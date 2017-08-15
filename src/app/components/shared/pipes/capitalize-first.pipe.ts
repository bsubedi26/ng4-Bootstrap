import { Pipe, PipeTransform } from '@angular/core';
/*
 * Capitalize the first letter of the string
 * Takes a string as a value.
 * Usage:
 *  value | capitalizefirst
 * Example:
 *  // value.name = apple
 *  {{ value.name | capitalizefirst  }}
 *  formats to: Apple
*/
@Pipe({
  name: 'CapitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    if (value === null) return 'Not assigned';
    // return value.charAt(0).toUpperCase() + value.slice(1);
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}