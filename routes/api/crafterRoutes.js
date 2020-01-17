const router = require("express").Router();
const crafterController = require("../../controllers/crafterController");

// Matches with "/api/crafter"
/*router
  .route("/")
  .get(booksController.getSavedBooks)
  .post(booksController.saveBook);
*/

router
  .route("/get-account-data")
  .post(crafterController.getAccountData);

router
  .route("/create-account")
  .post(crafterController.createAccount);

router
  .route("/login")
  .post(crafterController.login);

//START: Customer Routes...
router
  .route("/get-customers")
  .post(crafterController.getCustomers);

router
  .route("/edit-customer")
  .post(crafterController.editCustomer)

router
  .route("/create-customer")
  .post(crafterController.createCustomer)

router
  .route("/cancel-customer")
  .post(crafterController.cancelCustomer)

router
  .route("/reactivate-customer")
  .post(crafterController.reactivateCustomer)
//END: ... Customer Routes
//Start: Inventory Routes...
router
  .route("/create-inventory-item")
  .post(crafterController.createInventoryItem)
//
router
  .route("/get-inventory")
  .post(crafterController.getInventory);

router
  .route("/edit-inventory")
  .post(crafterController.editInventory)

router
  .route("/inventory-transaction")
  .post(crafterController.inventoryTransaction)


router
  .route("/cancel-inventory")
  .post(crafterController.cancelInventory)

router
  .route("/reactivate-inventory")
  .post(crafterController.reactivateInventory)
//END: ...Inventory Routes
//START: Transaction Routes...

router
  .route("/get-transactions")
  .post(crafterController.getTransactions)

router
  .route("/post-transaction")
  .post(crafterController.postTransaction)

//END: ...Transaction Routes
//START: Project Routes...

router
  .route("/create-project")
  .post(crafterController.createProject)

router
  .route("/get-projects")
  .post(crafterController.getProjects)

router
  .route("/get-complete-projects")
  .post(crafterController.getCompleteProjects)

//END: ...Project Routes

module.exports = router;
