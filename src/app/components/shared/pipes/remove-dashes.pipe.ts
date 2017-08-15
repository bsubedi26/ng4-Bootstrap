import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'RemoveDashes'
})
export class RemoveDashes implements PipeTransform {
  transform(value: string, args: any[]): string {
    if (value === null) { return 'Not assigned' };
    const newValue = value.replace(/-/g, " ");
    return newValue;
  }
}