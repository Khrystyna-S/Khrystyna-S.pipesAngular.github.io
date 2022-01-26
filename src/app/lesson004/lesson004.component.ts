import { Component, OnInit } from '@angular/core';

export interface Users {
  firstName: string,
  lastName: string,
  numberPhone: string
}

@Component({
  selector: 'app-lesson004',
  templateUrl: './lesson004.component.html',
  styleUrls: ['./lesson004.component.scss']
})
export class Lesson004Component implements OnInit {

  public userList: Users[] = [
    {
      firstName: 'Petya',
      lastName: 'Zhuk',
      numberPhone: '0964620410'
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      numberPhone: '0983377012'
    },
    {
      firstName: 'Alejandro',
      lastName: 'Del Rio Albreched',
      numberPhone: '0973845163'
    },
    {
      firstName: 'Vasylyna',
      lastName: 'Vrublevska',
      numberPhone: '0933311111'
    },
    {
      firstName: 'Ira',
      lastName: 'Tytar',
      numberPhone: '0993119922'
    },
    {
      firstName: 'Sofia',
      lastName: 'Zhuk',
      numberPhone: '099777888'
    }
  ];

  public isOpenModalOne = false;
  public isOpenModalTwo = false;
  public firstName!: string;
  public secondName!: string;
  public phoneNumber!: string;
  public editIndex!: number;
  public firstValue!: string;
  public secondValue!: string;
  public phoneValue!: string;
  public searchField = '';

  public absShowFirst: boolean = false;
  public absShowLast: boolean = false;
  public absShowNumber: boolean = false;
  public symbolsFirst: string = '';
  public symbolsLast: string = '';
  public symbolsNumber: string = '';
  public type: string = '';
  public element: string = '';
  

  constructor() { }

  ngOnInit(): void {
  }

  sortShowFirst(): void {
    this.symbolsLast = '';
    this.symbolsNumber = '';
    this.element = 'one';
    this.absShowFirst = !this.absShowFirst;
    if (this.absShowFirst) {
      this.symbolsFirst = '▲';
      this.type = 'asc';
    }
    else {
      this.symbolsFirst = '▼';
      this.type = 'desc';
    }
  };
  sortShowLast(): void {
    this.symbolsFirst = '';
    this.symbolsNumber = '';
    this.element = 'two';
    this.absShowLast = !this.absShowLast;
    console.log(this.absShowLast);
    if (this.absShowLast) {
      this.symbolsLast = '▲';
      this.type = 'asc';
    }
    else {
      this.symbolsLast = '▼';
      this.type = 'desc';
    }
  };
  sortShowNumber(): void {
    this.symbolsFirst = '';
    this.symbolsLast = '';
    this.element = 'three';
    this.absShowNumber = !this.absShowNumber;
    if (this.absShowNumber) {
      this.symbolsNumber = '▲';
      this.type = 'asc';
    }
    else {
      this.symbolsNumber = '▼';
      this.type = 'desc';
    }
  };

  addPhone(): void{
    this.isOpenModalOne = true;
  }

  editUser(index: number): void {
    this.isOpenModalTwo = true;
    this.editIndex = index;
    this.firstValue = this.userList[index].firstName;
    this.secondValue = this.userList[index].lastName;
    this.phoneValue = this.userList[index].numberPhone;
  }

  deleteUser(index: number): void {
    this.userList.splice(index, 1);
  }

  saveValue(): void{
    let newUser = {
      firstName: this.firstName,
      lastName: this.secondName,
      numberPhone: this.phoneNumber
    }
    this.userList.push(newUser);
    this.isOpenModalOne = false;
    this.firstName = '';
    this.secondName = '';
    this.phoneNumber = '';
  }

  editSaveValue(): void{
    this.userList[this.editIndex].firstName = this.firstValue;
    this.userList[this.editIndex].lastName = this.secondValue;
    this.userList[this.editIndex].numberPhone = this.phoneValue;
    this.isOpenModalTwo = false;
  }

  closeModalOne(): void{
    this.isOpenModalOne = false;
  }

  closeModalTwo(): void{
    this.isOpenModalTwo = false;
  }

}

