(() => {
    type Employee = {
      firstName: string,
      lastName: string,
      salary: number
    };
  
    let firstNameProp: keyof Employee = "firstName";
    let lastNameProp: keyof Employee = "lastName";
    let salary: keyof Employee = "salary";
    //Error
    // @ts-ignore
    let email: keyof Employee = "email";
  
    type ReadonlyEmployee = {
      readonly [K in keyof Employee]: Employee[K]
    };
  
    const employee: ReadonlyEmployee = {
      firstName: "Sylvain",
      lastName: "Pontoreau",
      salary: 2000
    };
  
    //Error
    //@ts-ignore
    employee.email = "email";
  
    type OptionalProperties<T> = {
      [K in keyof T]?: T[K]
    };
  
    const e: OptionalProperties<Employee> = {
  
    };
  })();