(() => {
    type Employee = {
        firstName: string,
        lastName: string,
        email: string
    };

    type ReadonlyEmployee = {
        readonly [K in keyof Employee]: Employee[K]
    };

    const employee: ReadonlyEmployee = {
        firstName: "Sylvain",
        lastName: "Pontoreau",
        email: "sypontor@microsoft.com"
    };

    //Error
    //@ts-ignore
    employee.email = "mdsfkmdsksd";

    type OptionalProperties<T> = {
        [K in keyof T]?: T[K]
    };

    const e : OptionalProperties<Employee> = {
        
    };
})();