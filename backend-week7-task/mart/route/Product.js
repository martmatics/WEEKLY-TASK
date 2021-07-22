const router = require("express").Router();

// Import route logic functions from route controller
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/Product");

// Set routes for products CRUD processes
router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getSingleProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;