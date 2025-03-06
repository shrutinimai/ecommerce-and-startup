const express = require("express");
const path = require("path");

const app = express();

const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");


app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.get("/api/products", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/", (req, res) => {
    res.send("Welcome to the E-Commerce API!");
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
