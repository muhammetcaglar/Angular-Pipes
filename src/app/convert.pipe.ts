import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, type:string): unknown {
    console.log(type);

    switch(type){

      case 'km':
        return value *1.60934+' km';
      case 'm':
        return value *1.60934*1000+' m';
      case 'cm':
        return value *1.60934*1000*1000+' cm';
      default:
        throw new Error('Böyle bir değer yok');
    }

  
  }

}
