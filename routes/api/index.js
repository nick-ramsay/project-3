const router = require("express").Router();
const bookRoutes = require("./crafterRoutes");

// Book routes
router.use("/crafter", crafterRoutes);

module.exports = router;