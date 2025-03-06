const products = [];

exports.getAllProducts = (req, res) => {
    res.json(products);
};

exports.addProduct = (req, res) => {
    const { productName } = req.body;

    if (!productName) {
        return res.status(400).json({ error: "Product name is required" });
    }

    const newProduct = { id: products.length + 1, name: productName };
    products.push(newProduct);
    console.log("New Product Added:", productName); 

    res.json({ message: "Product added successfully", product: newProduct });
};

exports.getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    
    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
};
