const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/getinsurancetype", ctrl.customer.getCarinsuranceType);
router.get("/getinsuranceid", ctrl.customer.getCarInsuranceId);
router.get("/getcarmodel/:year", ctrl.customer.getCarBrand);
router.get("/getcarmodel/:year/:brand", ctrl.customer.getCarModel);
router.get("/getcustomerinsurance", ctrl.customer.getCustomerInsurance);
router.get("/getcarclaim", ctrl.customer.getCarClaim);
router.get("/getlocation", ctrl.customer.getLocation);
router.get("/getcustomer", ctrl.customer.getCustomer);
router.get("/", ctrl.customer.test);
router.post("/signup", ctrl.customer.signup);
router.post("/login", ctrl.customer.login);
router.get("/verify", ctrl.customer.verify);
router.put("/edit", ctrl.customer.edit);
router.delete("/user", ctrl.customer.deleteUser);
router.get("/getcaryear", ctrl.customer.getCarYear);
router.post("/newinsure", ctrl.customer.newInsure);
router.get("/dashboarddata", ctrl.customer.dashboardData);
router.get("/claim", ctrl.customer.claim);

module.exports = router;
