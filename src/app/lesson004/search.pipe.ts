import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../lesson004/lesson004.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrUser: Users[], searchField: string): Users[] {
    if(!arrUser || !searchField) return arrUser;
    return arrUser.filter(user => 
      user.firstName.toLowerCase().includes(searchField.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchField.toLowerCase()) ||
      user.numberPhone.toLowerCase().includes(searchField.toLowerCase())
      );
  }

}
