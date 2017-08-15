import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'RemoveUnderscores'
})
export class RemoveUnderscores implements PipeTransform {
  transform(value: string, args: any[]): string {
    if (value === null) { return 'Not assigned' };
    const newValue = value.replace(/_/g, " ");
    return newValue;
  }
}