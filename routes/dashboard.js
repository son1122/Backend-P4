const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/getinsurancetype", ctrl.dashboard.getCarinsuranceType);
router.get("/getinsuranceid", ctrl.dashboard.getCarInsuranceId);
router.get("/getcarmodel", ctrl.dashboard.getCarModel);


module.exports = router;
