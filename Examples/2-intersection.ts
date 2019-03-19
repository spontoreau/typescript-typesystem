(() => {
    // Basic intersection
    type Person = {
      firstName: string;
      lastName: string;
      email: string;
      log(): void;
    };
  
    type Salaried = {
      salary: number;
      log(): void;
    }
  
    type Employee = Person & Salaried;
  
    const employee: Employee = {
      firstName: "Bill",
      lastName: "Gates",
      email: "bill.gates@microsoft.com",
      salary: 2000,
      log: function () {
        console.log(`${this.firstName} ${this.lastName} ${this.email} ${this.salary}`);
      }
    };
  
    employee.log();
  
    // Mixin
    const person: Person = {
      firstName: "Bill",
      lastName: "Gates",
      email: "bill.gates@microsoft.com",
      log: function () {
        console.log(`${this.firstName} ${this.lastName} ${this.email}`);
      }
    };
  
    const salaried: Salaried = {
      salary: 2000,
      log: function () {
        console.log(this.salary);
      }
    };
  
    const mixin1 = Object.assign(person, salaried);
    mixin1.log(); // :)
  
    //ES5
    const extend = <TFirst, TSecond>(first: TFirst, second: TSecond): TFirst & TSecond => {
      let mixin: any = {};
  
      for (let key in first) {
        mixin[key] = first[key];
      }
  
      for (let key in second) {
        if (!mixin.hasOwnProperty(key)) {
          mixin[key] = second[key];
        }
      }
      return mixin as TFirst & TSecond;
    };
  
    const mixin2 = extend(person, salaried);
    mixin2.log();
  })();