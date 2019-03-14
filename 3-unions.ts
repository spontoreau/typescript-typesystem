(() => {
    const untyped = (birthday: any) => {
        let firstChar = "";
        if(typeof birthday === "string") {
            firstChar = birthday.charAt(0);
        }

        if(birthday instanceof Date) {
            firstChar = birthday.toISOString().charAt(0);
        }
    };

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

    const paySomething = (canBePaid: Employee | Supplier) => {
        canBePaid.pay();
    };
})();