(() => {
    type Employee = {
        firstName: string;
        lastName: string;
        salary: number;
    };

    type Supplier = {
        name: string;
        invoice: number;
    }

    const doSomething = (obj: Employee | Supplier) => {
        if(isSupplier(obj)) {
            console.log(obj.name);
        } else {
            console.log(obj.firstName);
        }
    };

    const isSupplier = (obj: any): obj is Supplier => {
        return obj.test && obj.aProperty;
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

    doSomething(employee);
    doSomething(supplier);
})();