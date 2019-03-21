(() => {
    type Employee = {
      firstName: string;
      lastName: string;
      salary: string;
    };
  
    type Exclude<T, U> = T extends U ? never : T;
  
    type PersonKeys = Exclude<keyof Employee, "salary">
  
    type Pick<T, U extends keyof T> = {
      [K in U]: T[K]
    };
  
    type Person = Pick<Employee, Exclude<keyof Employee, "salary">>;
  
    const person: Person = {
      firstName: "firstName",
      lastName: "lastName"
    }
  
    type FirstName = Pick<Person, Exclude<keyof Person, "lastName">>;
  
    type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
  
    type t = Omit<Employee, "salary">
  
    // type Unpack<T, U> = T extends Array<U> ? U : T
  
    // type PoorSyntax = Unpack<Array<string>, string>
  
    type Unpack<T> = T extends Array<infer U> ? U : T
  
    type GoodSyntax = Unpack<Array<string>>
  })();