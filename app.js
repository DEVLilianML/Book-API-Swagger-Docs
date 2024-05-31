const express = require ("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const bookRoutes = require("./routes/books");

const app = express();

app.use(express.json());

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Books API",
        description: "CRUD API for managing books", //dcumentation of what the API is all about
        version: "1.0",

     },
     servers: [
        {
         url: "http://localhost:8000/",
        },
],
    },

apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//routes
app.use("/api/books", bookRoutes);

//start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

