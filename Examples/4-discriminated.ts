(() => {
  type Employee = {
    type: "employee";
    firstName: string
    lastName: string;
    salary: number;
  }

  type Supplier = {
    type: "supplier";
    name: string;
    invoice: number;
  }

  const getName = (value: Employee | Supplier) => {
    switch (value.type) {
      case "employee":
        console.log(`${
          value.firstName
          } ${
          value.lastName
          }`);
        break;
      case "supplier":
        console.log(value.name);
        break;
    }
  }
})();