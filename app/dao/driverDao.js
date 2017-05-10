/* Load Driver entity */
const Driver = require('../model/driver');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Driver Data Access Object
 */
class DriverDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT id, firstName, lastName, car FROM driver WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Driver(row.id, row.firstName, row.lastName, row.car));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM driver";
        return this.common.findAll(sqlRequest).then(rows => {
            let drivers = [];
            for (const row of rows) {
                drivers.push(new Driver(row.id, row.firstName, row.lastName, row.car));
            }
            return drivers;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM driver";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Driver
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(Driver) {
        let sqlRequest = "UPDATE driver SET " +
            "firstName=$firstName, " +
            "lastName=$lastName, " +
            "car=$car " +
            "WHERE id=$id";

        let sqlParams = {
            $firstName: Driver.firstName,
            $lastName: Driver.lastName,
            $car: Driver.car,
            $id: Driver.id
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Driver
     * returns database insertion status
     */
    create(Driver) {
        let sqlRequest = "INSERT into driver (firstName, lastName, car) " +
            "VALUES ($firstName, $lastName, $car)";
        let sqlParams = {
            $firstName: Driver.firstName,
            $lastName: Driver.lastName,
            $car: Driver.car
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity with a provided in the database
     * @params Driver
     * returns database insertion status
     */
    createWithId(Driver) {
        let sqlRequest = "INSERT into driver (id, firstName, lastName, car) " +
            "VALUES ($id, $firstName, $lastName, $car)";
        let sqlParams = {
            $id: Driver.id,
            $firstName: Driver.firstName,
            $lastName: Driver.lastName,
            $car: Driver.car
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = "DELETE FROM driver WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM driver WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.existsOne(sqlRequest, sqlParams);
    };
}

module.exports = DriverDao;