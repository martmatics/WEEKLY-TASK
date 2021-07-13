const express = require("express");
const app = express();

const PORT = 9090;

const products = require("./models/products");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Ecommerce")
})
app.get("/products/", (req, res) => {
    res.json(products).status(200);
      
      })
      
 app.post('/products', (req, res) => {
  const products = req.body;
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
})

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  product = Products.find((product) => product.id === Number(id));
  if(!products){
     res.status(404).send(`Product with id of ${productsid} not found`)
}else{
  Products = Products.filter((product) => product.id !== Number(id));
res.json(products).status(200)
}
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const deleteProduct = Products.find((product) => product.id === Number(id));
  if(!deleteProduct){
  res.status(404).send(`No product with id ${id}.`);
}else
{ products = deleteProduct;
  res.json(products).status(200)
  }})

app.listen(PORT, () => {
    console.log(`server started on port http://127.0.0.1:${PORT}`);
})