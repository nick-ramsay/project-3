const router = require("express").Router();
const crafterController = require("../../controllers/crafterController");

// Matches with "/api/crafter"
/*router
  .route("/")
  .get(booksController.getSavedBooks)
  .post(booksController.saveBook);
*/
router
  .route("/create-account")
  .post(crafterController.createAccount);

router
  .route("/login")
  .post(crafterController.login);

router
  .route("/get-customers")
  .get(crafterController.getCustomers);

router
  .route("/create-customer")
  .post(crafterController.createCustomer)

  router
  .route("/cancel-customer")
  .post(crafterController.cancelCustomer)

router
  .route("/create-inventory-item")
  .post(crafterController.createInventoryItem)
/*
router
  .route("/delete/:id")
  .delete(booksController.deleteBook)
*/

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .delete(booksController.removeSavedBook);

module.exports = router;