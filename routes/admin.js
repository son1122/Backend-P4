const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/getinsurancetype", ctrl.admin.getCarinsuranceType);
router.get("/getinsuranceid", ctrl.admin.getCarInsuranceId);
router.get("/getcarmodel", ctrl.admin.getCarModel);


module.exports = router;
