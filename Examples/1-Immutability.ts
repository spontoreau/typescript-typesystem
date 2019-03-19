(() => {
    let test = "test";
    test = "change";

    const test2 = "test";
    // @ts-ignore
    test2 = "no-change";

    interface Employee {
        firstName: string;
        lastName: string;
    }

    const employee: Employee = {
        firstName: "Sylvain",
        lastName: "Pontoreau"
    };

    employee.firstName = "Test";

    const employee2: Readonly<Employee> = {
        firstName: "Sylvain",
        lastName: "Pontoreau"
    };

    // @ts-ignore
    employee2.firstName = "Test";

    const employees = [
        employee
    ];

    employees.push(employee2);

    const employees2: ReadonlyArray<Employee> = [
        employee
    ];

    // @ts-ignore
    employees2.push(employee2);
});