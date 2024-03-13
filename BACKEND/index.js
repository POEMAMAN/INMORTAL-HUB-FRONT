const nodemailer = require("nodemailer")
const express = require("express");
const cors = require("cors");
// Método de config cloudinary
const { configCloudinary } = require('./src/utils/cloudinary/config.js');
const { connect } = require("./src/utils/db.js");

//Rutas Componentes Principales
const booksRouter = require("./src/api/routes/book.routes.js");
const universeRouter = require("./src/api/routes/universes.routes");
const userRouter = require("./src/api/users/users.routes.js");

// Rutas Componentes hijos (universos)

// Dune
const booksDuneRoutes = require("./src/api/routes/routes.dune/books.dune.routes");
const charactersDuneRoutes = require("./src/api/routes/routes.dune/characters.dune.routes");
const countriesDuneRoutes = require("./src/api/routes/routes.dune/countries.dune.routes");
const planetsDuneRoutes = require('./src/api/routes/routes.dune/planets.dune.routes');

//
const UserRoutes = require('./src/api/users/users.routes.js')

connect();

const dotenv = require('dotenv');

// Ejecutamos método para usar .env
dotenv.config();
 
// Ejecutar la configuación de cloudinary
configCloudinary();

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// app.use("*", (req, res, next) => {
//   const error = new Error();
//   error.status = 404;
//   error.message = "Route not found";
//   return next(error);
// });

app.use(
  cors({
    origin: ["*"],
  })
);

//Routes
//Rutas Principales
app.use('/api/users', UserRoutes)
app.use("/public", express.static("public"));
app.use("/api", (req, res, next) => "im alive");

app.use("/books", booksRouter);
app.use("/universes", universeRouter)
app.use('/user', userRouter);
// Rutas Universos
// Dune
app.use("/universes/dune/books", booksDuneRoutes)
app.use("/universes/dune/characters", charactersDuneRoutes)
app.use("/universes/dune/countries", countriesDuneRoutes)
app.use('/universes/dune/planets', planetsDuneRoutes)


const PORT = process.env.PORT || 8084;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port 🙈: ${PORT}`);
});

app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

app.disable('x-powered-by')

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
