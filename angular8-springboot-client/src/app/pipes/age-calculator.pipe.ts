import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'ageCalculator'
})
export class AgeCalculatorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment().diff(value, 'years');
  }

}
