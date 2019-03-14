"use strict";
(() => {
    const doSomething = (obj) => {
        if (isSupplier(obj)) {
            console.log(obj.name);
        }
        else {
            console.log(obj.firstName);
        }
    };
    const isSupplier = (obj) => {
        return obj.test && obj.aProperty;
    };
    const employee = {
        firstName: "Sylvain",
        lastName: "Pontoreau",
        salary: 2000
    };
    const supplier = {
        name: "Test",
        invoice: 10000
    };
    doSomething(employee);
    doSomething(supplier);
})();
