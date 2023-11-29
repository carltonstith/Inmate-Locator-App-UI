import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!args) return value;

    return value.filter((val:any) => {
      let rVal = (val.firstName.toLocaleLowerCase().includes(args)) || (val.lastName.toLocaleLowerCase().includes(args));
      return rVal;
    });
  }

}
