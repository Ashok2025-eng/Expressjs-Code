import express from "express";
import http from "http";
import mongoose from "mongoose";

import categoryRoutes from "./routes/category.routes.js";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const PORT = 8080;

app.use(express.json());
//* using routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

//* Connectign database
mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "team_18",
    autoCreate: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("failed to connect");
    console.log(error);
  });

//*REST API
// REST = Representational state transfer

//* client server arch
//* stateless
//* unifrom interface

//100-199 => informationl
//200-299 =>success
//300-399 =>redirrect
//400-499 =>client error
//500-599 =>server side error

//* 200 => ok
//* 201 => created
//* 400 => bad request
//* 401 =>unauthorized
//* 403 => forbidden
//* 404 => not found

//* 500 => internal server error
//* 502  =>bad  gateway

//*7 code on demand

//* everything is resource
//[user,products,categories]

//* endpoint/path/route
// /users ,/products

//* uri or path
// /users/profuts

//*uri
// /users
//*url
// http://localhost:8080

//! Restful api
//?RE = RESOURCE ARE REPRESENTATIONAL USING STANDARD DATA FROMAT [USUSALLY JSON]
//? S =CURRENT STATE OF THE RESOURCE [USERS,PRODUCTS,CATEGORIES]
//? T =REPRESENTED RESOURCE TRANSFERRED BETWEEN CLIENT AND SERVER

//? RESTAPI => It is archetecture principles that used to design web apis
//? that allows different services to communicate over http

// sql                  nosql
// database             database
// table                collection
//row                   document
//column                fields

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
