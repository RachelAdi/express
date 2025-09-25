const express = require("express");
const app = express();

app.use(express.json());

const booksRouter = require("./router/bookRouter");

app.use("/books", booksRouter);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
