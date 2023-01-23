const {where} = require("sequelize");
const CarModel = require("../models").CarModel
const CarInsuranceId = require("../models").CarInsuranceId
const CustomerInsurance = require("../models").CustomerInsurance
const Customer = require("../models").Customer
const CustomerClaim = require("../models").CustomerClaim
const CarInsuranceType = require("../models").CarInsuranceType
const LocationId = require("../models").LocationId;
const getCarinsuranceType = async (req, res) => {
    try {
        await CarInsuranceType.findAll({
            // attributes: ["name", "id", "img", "price"],
        }).then((fruit) => {
            // console.log(fruit)
            res.json(fruit);
        });
    } catch (err) {
        // console.log(err);
        res.status(500).send({message: "Menuitem not found."});
    }
};
const getCarInsuranceId = async (req, res) => {
    try {
        await CarInsuranceId.findAll({
            // attributes: ["name", "id", "img", "price"],
        }).then((fruit) => {
            // console.log(fruit)
            res.json(fruit);
        });
    } catch (err) {
        // console.log(err);
        res.status(500).send({message: "Menuitem not found."});
    }
};
const getCarModel = async (req, res) => {
    try {
        await CarModel.findAll({
            // attributes: ["name", "id", "img", "price"],
        }).then((fruit) => {
            // console.log(fruit)
            res.json(fruit);
        });
    } catch (err) {
        // console.log(err);
        res.status(500).send({message: "Menuitem not found."});
    }
};

module.exports = {

    getCarinsuranceType,
    getCarInsuranceId,
    getCarModel,
};
