/**
 * Driver Entity (ES6 Class)
 */

class Driver {
    constructor(id, firstName, lastName, car) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.car = car;
    }
}

module.exports = Driver;