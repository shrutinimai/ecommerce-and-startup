const express = require("express");
const app = express();

const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the E-Commerce API!");
});
app.use((req, res) => {
    res.status(404).send("Page not found");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
