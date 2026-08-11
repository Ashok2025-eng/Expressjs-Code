//* get all
export const getAllCategory = (req, res) => {
  const { name, limit, page, sort } = req.query;
  console.log(req.query);

  res.json({
    message: "all catagories fetched",
    success: true,
    status: "success",
    data: [
      {
        _id: 1,
        name: "books",
        description: "all kinds of book",
      },
      {
        _id: 7,
        name: "grocery",
        description: "all kinds of grocery",
      },
    ],
  });
};

//* get by id
export const getCategoryById = (req, res) => {
  const { id } = req.params;
  //   res.send(`<h1>category by ${id} fetched</h1>`);
  res.json({
    message: `category:${id} fetched`,
    status: "success",
    success: true,
    data: [
      {
        _id: id,
        name: "electronics",
        description: "all kinds of electronics items",
      },
    ],
  });
};

//* create
export const createCategory = (req, res) => {
  //   res.send(`<h1>category created</h1>`);

  const category = { _id: 8, ...req.body };
  res.json({
    data: category,
    message: "Category created",
    status: "success",
    success: true,
  });
};

//* update
export const updateCategory = (req, res) => {
  const { id } = req.params;
  //   res.send(`<h1>category:${id} updated</h1>`);
  console.log(req.body);
  const updatedCategory = {
    _id: id,
    ...req.body,
  };
  res.json({
    data: updatedCategory,
    message: `Category ${id} updated`,
    status: "success",
    success: true,
  });
};

//* delete
export const deleteCategory = (req, res) => {
  const { id } = req.params;
  //   res.send(`<h1>category:${id} deleted</h1>`);
  res.json({
    message: `category ${id} deleted`,
    success: true,
    status: "success",
    data: null,
  });
};
