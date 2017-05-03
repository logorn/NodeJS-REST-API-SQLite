/**
 * Car Entity (ES6 Class)
 */

class Car {
    constructor(id, maker, model, year, driver) {
        this.id = id;
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.driver = driver;
    }
}

module.exports = Car;