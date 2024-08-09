export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

let class2019 = new HolbertonClass(2019, 'San Francisco');
let class2020 = new HolbertonClass(2020, 'San Francisco');

let student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
let student2 = new StudentHolberton('John', 'Doe', class2020);
let student3 = new StudentHolberton('Albert', 'Clinton', class2019);
let student4 = new StudentHolberton('Donald', 'Bush', class2019);
let student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export default [student1, student2, student3, student4, student5];
