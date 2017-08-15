import { Pipe, PipeTransform } from '@angular/core';
/*
 * Removes file extension from input string
 * Usage:
 * Example:
 *  // value = apple.mid
 *  {{ value | RemoveExtensionPipe  }}
 *  formats to: Apple
*/
@Pipe({
  name: 'RemoveFileExtensionPipe'
})
export class RemoveFileExtensionPipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    if (value === null) { return 'Not assigned' };
    const newValue = value.substring(0, value.indexOf('.'))
    return newValue;
  }
}