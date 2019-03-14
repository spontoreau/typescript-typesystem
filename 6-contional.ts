(() => {
    type Employee = {
        firstName: string;
        lastName: string;
        salary: string;
    };

    type ExcludeFrom<T, U> = T extends U ? never : T;

    type PersonKeys = ExcludeFrom<keyof Employee, "salary">

    type PickFrom<T, Keys extends keyof T> = {
        [K in Keys]: T[K]
    };

    type Person = PickFrom<Employee, ExcludeFrom<keyof Employee, "salary">>;

    const person: Person = {
        firstName: "firstName",
        lastName: "lastName"
    }

    type FirstName = PickFrom<Person, ExcludeFrom<keyof Person, "lastName">>;

    type Omit<T, K> = PickFrom<T, Exclude<keyof T, K>>

    type t = Omit<Employee, "salary">
})();