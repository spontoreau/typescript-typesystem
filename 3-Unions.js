"use strict";
(() => {
    const untyped = (birthday) => {
        let firstChar = "";
        if (typeof birthday === "string") {
            firstChar = birthday.charAt(0);
        }
        if (birthday instanceof Date) {
            firstChar = birthday.toISOString().charAt(0);
        }
    };
    const paySomething = (canBePaid) => {
        canBePaid.pay();
    };
})();
