const express = require("express");
const path = require("path");

const app = express();

const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");

app.use(express.static("public")); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/cart", cartRoutes);

app.use("/addproducts", express.static(path.join(__dirname, "views")));


app.get("/", (req, res) => {
    res.send("Welcome to the E-Commerce API!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
