const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/getinsurancetype", ctrl.admin.getCarinsuranceType);
router.get("/getinsuranceid", ctrl.admin.getCarInsuranceId);
router.get("/getcarmodel/:year", ctrl.admin.getCarBrand);
router.get("/getcarmodel/", ctrl.admin.getCarModel);
router.get("/getcustomerinsurance", ctrl.admin.getCustomerInsurance);
router.get("/getcarclaim", ctrl.admin.getCarClaim);
router.get("/getlocation", ctrl.admin.getLocation);
router.get("/getcustomer", ctrl.admin.getCustomer);
router.get("/", ctrl.admin.test);
router.post("/signup", ctrl.admin.signup);
router.post("/login", ctrl.admin.login);
router.get("/verify", ctrl.admin.verify);
router.put("/edit", ctrl.admin.edit);
router.delete("/user", ctrl.admin.deleteUser);
router.get("/getcaryear", ctrl.admin.getCarYear);
router.get("/dashboarddata", ctrl.admin.dashboardData);
router.get("/claim", ctrl.admin.claim);
router.post("/addcar", ctrl.admin.addCar);
router.post("/claim", ctrl.admin.addClaim);
router.put('/insure',ctrl.admin.editInsure)
router.post('/geteditinsure',ctrl.admin.getEditInsure)
module.exports = router;
