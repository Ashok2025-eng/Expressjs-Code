//* get all
export const getAllProducts = (req, res) => {
  const { ProductName, limit, page, sort } = req.query;
  console.log(req.query);

  res.json({
    message: "all product fetched",
    success: true,
    status: "success",
    data: [
      {
        _id: 1,
        ProductName: "shoe",
        price: 13000,
        size: 39,
      },
      {
        _id: 2,
        ProductName: "T-Shirt",
        price: 2000,
        size: "xl",
      },
    ],
  });
};

//* get by id
export const getProductById = (req, res) => {
  const { id } = req.params;
  // find product by id from db
  // res.send(`<h1>Products by ${id} fetched</h1>`);
  res.json({
    message: `Products:${id} fetched`,
    status: "success",
    success: true,
    data: [
      {
        _id: id,
        ProductName: "Pant",
        price: 3000,
        size: 30,
      },
    ],
  });
};

//* create
export const createProduct = (req, res) => {
  // insert new product on db
  // res.send(`<h1>Products created</h1>`);
  console.log(req.body);
  const product = {
    _id: 1,
    ...req.body,
  };

  res.json({
    data: product,
    message: "product created",
    status: "success",
    success: true,
  });
};

//* update
export const updateProduct = (req, res) => {
  const { id } = req.params;
  // update product
  // res.send(`<h1>Products:${id} updated</h1>`);
  console.log(req.body);
  const updatedProduct = {
    _id: id,
    ...req.body,
  };
  res.json({
    data: updatedProduct,
    message: `Product ${id} updated`,
    status: "success",
    success: true,
  });
};

//* delete
export const deleteProduct = (req, res) => {
  const { id } = req.params;
  // delete product from db
  // res.send(`<h1>Products:${id} deleted</h1>`);

  res.json({
    message: "`Product ${id}deleted`",
    success: true,
    status: "success",
    data: null,
  });
};
