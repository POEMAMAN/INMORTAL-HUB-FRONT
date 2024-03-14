const nodemailer = require("nodemailer")
const express = require("express");
const cors = require("cors");
// Método de config cloudinary
const { configCloudinary } = require('./src/utils/cloudinary/config.js');
const { connect } = require("./src/utils/db.js");

//Rutas Componentes Principales
// const booksRouter = require("./src/api/routes/book.routes.js");
// const universeRouter = require("./src/api/routes/universes.routes");
const userRouter = require("./src/api/users/users.routes.js");

// Rutas Componentes hijos (universos)

// Dune
const booksDuneRoutes = require("./src/api/routes/routes.dune/books.dune.routes");
const charactersDuneRoutes = require("./src/api/routes/routes.dune/characters.dune.routes");
const moviesDuneRoutes = require("./src/api/routes/routes.Dune/movies.Dune.routes.js");

// HarryPotter
const booksHarryPotterRoutes = require("./src/api/routes/routes.HarryPotter/books.HarryPotter.routes");
const charactersHarryPotterRoutes = require("./src/api/routes/routes.HarryPotter/characters.HarryPotter.routes");
const moviesHarryPotterRoutes = require(require("./src/api/routes/routes.HarryPotter/movies.HarryPotter.routes"));

// LordOfTheRings
const booksLordOfTheRingsRoutes = require("./src/api/routes/routes.LordOfTheRings/books.LordOfTheRings.routes");
const charactersLordOfTheRingsRoutes = require("./src/api/routes/routes.LordOfTheRings/characters.LordOfTheRings.routes");
const moviesLordOfTheRingsRoutes = require("./src/api/routes/routes.LordOfTheRings/movies.LordOfTheRings.routes");

// Alien
const booksAlienRoutes = require("./src/api/routes/routes.Alien/books.Alien.routes");
const charactersalienRoutes = require("./src/api/routes/routes.Alien/characters.Alien.routes");
const moviesAlienRoutes = require("./src/api/routes/routes.Alien/movies.Alien.routes");

// Crepusculo
const booksCrepusculoRoutes = require("./src/api/routes/routes.Crepusculo/books.Crepusculo.routes");
const charactersCrepusculoRoutes = require("./src/api/routes/routes.Crepusculo/characters.Crepusculo.routes");
const moviesCrepusculoRoutes = require("./src/api/routes/routes.Crepusculo/movies.Crepusculo.routes");

// IndianaJones
const booksIndianaJonesRoutes = require("./src/api/routes/routes.IndianaJones/books.IndianaJones.routes");
const charactersIndianaJonesRoutes = require("./src/api/routes/routes.IndianaJones/characters.IndianaJones.routes");
const moviesIndianaJonesRoutes = require("./src/api/routes/routes.IndianaJones/movies.IndianaJones.routes");

// HungerGames
const booksHungerGamesRoutes = require("./src/api/routes/routes.HungerGames/books.HungerGames.routes");
const charactersHungerGamesRoutes = require("./src/api/routes/routes.HungerGames/characters.HungerGames.routes");
const moviesHungerGamesRoutes = require("./src/api/routes/routes.HungerGames/movies.HungerGames.routes");

// JurassicPark
const booksJurassicParkRoutes = require("./src/api/routes/routes.JurassicPark/books.JurassicPark.routes");
const charactersJurassicParkRoutes = require("./src/api/routes/routes.JurassicPark/characters.JurassicPark.routes");
const moviesJurassicParkRoutes = require("./src/api/routes/routes.JurassicPark/movies.JurassicPark.routes");

// ImposibleMission
const booksImposibleMissionRoutes = require("./src/api/routes/routes.ImposibleMission/books.ImposibleMission.routes");
const charactersJImposibleMissionRoutes = require("./src/api/routes/routes.ImposibleMission/characters.ImposibleMission.routes");
const moviesImposibleMissionRoutes = require("./src/api/routes/routes.ImposibleMission/movies.ImposibleMission.routes");

// ApesPlanet
const booksApesPlanetRoutes = require("./src/api/routes/routes.ApesPlanet/books.ApesPlanet.routes");
const charactersApesPlanetRoutes = require("./src/api/routes/routes.ApesPlanet/characters.ApesPlanet.routes");
const moviesApesPlanetRoutes = require("./src/api/routes/routes.ApesPlanet/movies.ApesPlanet.routes");

// StarTrek
const booksStarTrekRoutes = require("./src/api/routes/routes.StarTrek/books.StarTrek.routes");
const charactersStarTrekRoutes = require("./src/api/routes/routes.StarTrek/characters.StarTrek.routes");
const moviesStarTrekRoutes = require("./src/api/routes/routes.StarTrek/movies.StarTrek.routes");

// StarWars
const booksStarWarsRoutes = require("./src/api/routes/routes.StarWars/books.StarWars.routes");
const charactersStarWarsRoutes = require("./src/api/routes/routes.StarWars/characters.StarWars.routes");
const moviesStarWarsRoutes = require("./src/api/routes/routes.StarWars/movies.StarWars.routes");

// Underworld
const booksUnderworldRoutes = require("./src/api/routes/routes.Underworld/books.Underworld.routes");
const charactersUnderworldRoutes = require("./src/api/routes/routes.Underworld/characters.Underworld.routes");
const moviesUnderworldRoutes = require("./src/api/routes/routes.Underworld/movies.Underworld.routes");

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
app.use("/universes/dune/countries", moviesDuneRoutes)

// HarryPotter
app.use("/universes/HarryPotter/books", booksHarryPotterRoutes)
app.use("/universes/HarryPotter/characters", charactersHarryPotterRoutes)
app.use("/universes/HarryPotter/movies", moviesHarryPotterRoutes)

// LordOfTheRings
app.use("/universes/LordOfTheRings/books", booksLordOfTheRingsRoutes)
app.use("/universes/LordOfTheRings/characters", charactersLordOfTheRingsRoutes)
app.use("/universes/LordOfTheRings/movies", moviesLordOfTheRingsRoutes)

// Alien
app.use("/universes/Alien/books", booksAlienRoutes)
app.use("/universes/Alien/characters", charactersAlienRoutes)
app.use("/universes/Alien/movies", moviesAlienRoutes)

// Crepusculo
app.use("/universes/Crepusculo/books", booksCrepusculoRoutes)
app.use("/universes/Crepusculo/characters", charactersCrepusculoRoutes)
app.use("/universes/Crepusculo/movies", moviesCrepusculoRoutes)

// IndianaJones
app.use("/universes/IndianaJones/books", booksIndianaJonesRoutes)
app.use("/universes/IndianaJones/characters", charactersIndianaJonesRoutes)
app.use("/universes/IndianaJones/movies", moviesIndianaJonesRoutes)

// HungerGames
app.use("/universes/HungerGames/books", booksHungerGamesRoutes)
app.use("/universes/HungerGames/characters", charactersHungerGamesRoutes)
app.use("/universes/HungerGames/movies", moviesHungerGamesRoutes)

// JurassicPark
app.use("/universes/JurassicPark/books", booksJurassicParkRoutes)
app.use("/universes/JurassicPark/characters", charactersJurassicParkRoutes)
app.use("/universes/JurassicPark/movies", moviesJurassicParkRoutes)

// ImposibleMission
app.use("/universes/ImposibleMission/books", booksImposibleMissionRoutes)
app.use("/universes/ImposibleMission/characters", charactersImposibleMissionRoutes)
app.use("/universes/ImposibleMission/movies", moviesImposibleMissionRoutes)

// ApesPlanet
app.use("/universes/ApesPlanet/books", booksApesPlanetRoutes)
app.use("/universes/ApesPlanet/characters", charactersApesPlanetRoutes)
app.use("/universes/ApesPlanet/movies", moviesApesPlanetRoutes)

// StarTrek
app.use("/universes/StarTrek/books", booksStarTrekRoutes)
app.use("/universes/StarTrek/characters", charactersStarTrekRoutes)
app.use("/universes/StarTrek/movies", moviesStarTrekRoutes)

// StarWars
app.use("/universes/StarWars/books", booksStarWarsRoutes)
app.use("/universes/StarWars/characters", charactersStarWarsRoutes)
app.use("/universes/StarWars/movies", moviesStarWarsRoutes)

// Underworld
app.use("/universes/Underworld/books", booksUnderworldRoutes)
app.use("/universes/Underworld/characters", charactersUnderworldRoutes)
app.use("/universes/Underworld/movies", moviesUnderworldRoutes)

//
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
