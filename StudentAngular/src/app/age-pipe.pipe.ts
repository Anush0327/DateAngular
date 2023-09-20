import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {

  transform(dob:string): number {
    const birthDate =  new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getUTCFullYear() - birthDate.getUTCFullYear();
    return age;
  }

}
