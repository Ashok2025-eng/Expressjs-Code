import express from "express";
import http from "http";

import categoryRoutes from "./routes/category.routes.js";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const PORT = 8080;


//* using routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);



const server = http.createServer(app);
// });
//* listening on port
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
  // console.log("press ctrl+c to close server");
});

//! req object
//* req.path -> current req path : /users , /products
//* req.method -> current req method : GET , POST ....

//* req.params => route parameters => object
// /users/:id
// req /users/1 => req.params => {id:'1'}
// req /users/100 => req.params => {id:'100'}
// req /users/xyz => req.params => {id:'xyz'}

// /users/:x  => req.params => {x:'100'}

//? /posts/:userId/:postId
// /posts/1/2  => {userId:'1',postId:'2'}

//* req.query => query parameter => object
//- filter , pagination , sorting

//! req.body => object

// url
//- protocol://host/path?query
//- http://example.com/users?name=john&page=1&limit=10&sort=desc
// {name:'john',page:"1",limit:'10', sort:'desc'}

// SMS
// students crud
// departments crud
// teachers  crud
// class & sections crud
