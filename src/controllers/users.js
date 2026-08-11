// GET all users
// route: GET /users

let users = [];
export const getAllUsers = (req, res) => {
  // req.query holds optional filters/settings sent after "?" in the URL
  // e.g. /users?name=john&limit=10&page=1&sort=ascnd
  const { name, limit, page, sort } = req.query;
  console.log(req.query);
  const user = users.find((user) => user._id === Number(id));

  if (!user) {
    res.json({
      message: `user:${id} not found`,
      status: "fail",
      success: false,
      data: null,
    });
    return;
  }

  // later: use name/limit/page/sort to filter/paginate/sort real data from a database
  // for now: just returning a fixed, hardcoded list of users

  res.json({
    message: "all user fetched",
    success: true,
    status: "success",
    data: [
      {
        _id: 1,
        name: "john doe",
        email: "john123@gmail.com",
        password: "123456",
      },
      {
        _id: 2,
        name: "jack doe",
        email: "jack123@gmail.com",
        password: "1234567",
      },
    ],
  });
};

// GET one user by id
// route: GET /users/:id
export const getUserById = (req, res) => {
  // req.params holds values captured from the URL path itself
  // e.g. /users/5  ->  req.params.id = "5"
  const { id } = req.params;

  // later: look up the real user with this id from a database
  // for now: just returning fixed/fake user data, using the id passed in

  res.json({
    message: `user:${id} fetched`,
    status: "success",
    success: true,
    data: [
      {
        _id: id,
        name: "johnnnnnn doe",
        email: "john123@gmail.com",
        password: "123456",
      },
    ],
  });
};

// CREATE a new user
// route: POST /users
export const createUser = (req, res) => {
  // req.body holds the data sent by the client in the request body
  // e.g. { name: "Ashok", email: "...", password: "..." }
  console.log(req.body);

  // build a new user object:
  // spread whatever was sent in req.body, and manually add an _id
  // later: this _id would come from the database instead of being hardcoded
  const user = { _id: users.length + 1, ...req.body };

  users.push(user);

  res.json({
    data: user,
    message: "user created",
    status: "success",
    success: true,
  });
};

// UPDATE a user by id
// route: PUT /users/:id
// UPDATE a user by id
// route: PUT /users/:id
export const updateUser = (req, res) => {
  const { id } = req.params;
  console.log(req.body);

  const updatedUser = {
    _id: id,
    ...req.body,
  };

  res.json({
    data: updatedUser,
    message: `User ${id} updated`,
    status: "success",
    success: true,
  });
};

// DELETE a user by id
// route: DELETE /users/:id
export const deleteUser = (req, res) => {
  const { id } = req.params;

  res.json({
    message: `User ${id} deleted`,
    success: true,
    status: "success",
    data: null,
  });
};
