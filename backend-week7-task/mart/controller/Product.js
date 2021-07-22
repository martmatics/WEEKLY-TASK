const Products = require("../model/Product");

// Read all existing product records 
const getProducts = (req, res) => {
  res.status(200).json({ success: true, data: Products });
};

//  Read single product record 
const getSingleProduct = (req, res) => {
  const { id } = req.params;
  // find product by id
  singleProduct = Products.find((product) => product.id === Number(id));
  if (!singleProduct) {
    return res
      .status(404)
      .json({ success: false, msg: `product not foubd ${id}.` });
  }
  return res.status(200).json({
    success: true,
    data: singleProduct,
  });
};

// Create new product record 
const createProduct = (req, res) => {
  const Product = req.body;
  if (!products.name || !products.description || !products.image || !products.price) {
    return res.status(400).json('enter new product')
  }
  const newProduct = [{
    id: products.length + 1,
    name: products.name,
    description: products.description,
    image: products.image,
    price: products.price,
   }]
   newProduct.push(newProduct);
  res.json(products).status(200)

};

//  Update record 
const updateProduct = (req, res) => {
  const { id } = req.params;
  // find product by id, return 404 if not found
  product = Products.find((product) => product.id === Number(id));
  if (!product) {
    return res
      .status(404)
      .json({ success: false, msg: `No product with id ${id}.` });
  }
  // find and modify a product
  Products = Products.map((product) => {
    if (product.id === Number(id)) {
      product = { ...product, ...req.body };
    }
    return product;
  });
  return res.status(200).json({
    success: true,
    msg: `Product ${id} has been updated.`,
    data: Products,
  });
};

// Delete a product 
const deleteProduct = (req, res) => {
  const { id } = req.params;
  // find product by id
  const deleteProduct = Products.find((product) => product.id === Number(id));
  if (!deleteProduct) {
    return res
      .status(404)
      .json({ success: false, msg: `No product with id ${id}.` });
  }
  // create new array without the deleted product
  Products = Products.filter((product) => product.id !== Number(id));
  return res.status(200).json({
    success: true,
    msg: `Product ${id} has been deleted.`,
    data: Products,
  });
};

module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};