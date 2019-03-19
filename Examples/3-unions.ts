(() => {
    type Employee = {
        firstName: string;
        lastName: string;
        salary: number;
        pay(): void;
      };
    
      type Supplier = {
        name: string;
        invoice: number;
        pay(): void;
      }
    
      type Payable = Employee | Supplier;
    
      const paySomething = (canBePaid: Employee | Supplier) => {
        canBePaid.pay();
      };    
})();