import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../lesson004/lesson004.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arrBook: Users[], sort: string, elem: string): Users[] {
    // if(!arrBook) return [];
    // if(!sort) return arrBook;
    if(!arrBook || !sort) return arrBook;
    if(elem == 'one') {
      if(sort === 'asc') {
        return arrBook.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
      }
      return arrBook.sort((a, b) => (a.firstName < b.firstName) ?  1 : ((a.firstName > b.firstName) ? -1 : 0))
    }
    else if(elem == 'two') {
      if(sort === 'asc') {
        return arrBook.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((a.lastName < b.lastName) ? -1 : 0))
      }
      return arrBook.sort((a, b) => (a.lastName < b.lastName) ?  1 : ((a.lastName > b.lastName) ? -1 : 0))
    }
    else {
      if(sort === 'asc') {
        return arrBook.sort((a, b) => (a.numberPhone > b.numberPhone) ? 1 : ((a.numberPhone < b.numberPhone) ? -1 : 0))
      }
      return arrBook.sort((a, b) => (a.numberPhone < b.numberPhone) ?  1 : ((a.numberPhone > b.numberPhone) ? -1 : 0))
    }
  }

}
