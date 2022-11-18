
const express = require("express");
// rutas
const productRouter = require("./routes/products");

const app = express();

//levantar el servidor
app.listen(8080,()=>console.log("Server listening on port 8080"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/productos", productRouter);