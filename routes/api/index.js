const router = require("express").Router();
const crafterRoutes = require("./crafterRoutes");

// Book routes
router.use("/crafter", crafterRoutes);

module.exports = router;