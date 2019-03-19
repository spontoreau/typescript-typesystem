(() => {
    // basic guards
    const untyped = (birthday: any) => {
      let firstChar = "";
      if (typeof birthday === "string") {
        firstChar = birthday.charAt(0);
      }
  
      if (birthday instanceof Date) {
        firstChar = birthday.toISOString().charAt(0);
      }
    };
  

    // User defined guards
    type Employee = {
      firstName: string;
      lastName: string;
      salary: number;
    };
  
    type Supplier = {
      name: string;
      invoice: number;
    }
  
    const getName = (obj: Employee | Supplier) => {
      if (isSupplier(obj)) {
        console.log(obj.name);
      } else {
        console.log(`${obj.firstName} ${obj.lastName}`);
      }
    };
  
    const isSupplier = (obj: any): obj is Supplier => {
      return obj.name && obj.invoice;
    }
  
    const employee: Employee = {
      firstName: "Sylvain",
      lastName: "Pontoreau",
      salary: 2000
    };
  
    const supplier: Supplier = {
      name: "Test",
      invoice: 10000
    };
  
    getName(employee);
    getName(supplier);
  })();