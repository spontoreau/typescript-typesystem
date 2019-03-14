"use strict";
(() => {
    const employee = {
        firstName: "Bill",
        lastName: "Gates",
        email: "bill.gates@microsoft.com",
        salary: 2000,
        log: function () {
            console.log(`${this.firstName} ${this.lastName} ${this.email} ${this.salary}`);
        }
    };
    employee.log();
    const person = {
        firstName: "Bill",
        lastName: "Gates",
        email: "bill.gates@microsoft.com",
        log: function () {
            console.log(`${this.firstName} ${this.lastName} ${this.email}`);
        }
    };
    const salaried = {
        salary: 2000,
        log: function () {
            console.log(this.salary);
        }
    };
    const mixin1 = Object.assign(person, salaried);
    mixin1.log();
    //ES5
    const extend = (first, second) => {
        let mixin = {};
        for (let key in first) {
            mixin[key] = first[key];
        }
        for (let key in second) {
            if (!mixin.hasOwnProperty(key)) {
                mixin[key] = second[key];
            }
        }
        return mixin;
    };
    const mixin2 = extend(person, salaried);
    mixin2.log();
})();
