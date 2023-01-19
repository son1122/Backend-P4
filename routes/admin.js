const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/getinsurancetype", ctrl.admin.getCarinsuranceType);
router.get("/getinsuranceid", ctrl.admin.getCarInsuranceId);
router.get("/getcarmodel", ctrl.admin.getCarModel);
router.get("/getcustomerinsurance", ctrl.admin.getCustomerInsurance);
router.get("/getcarclaim", ctrl.admin.getCarClaim);
router.get("/getlocation", ctrl.admin.getLocation);
router.get("/getcustomer", ctrl.admin.getCustomer);


module.exports = router;
