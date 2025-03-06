function onsubmitHandler(event) {
    event.preventDefault();
    
    const productName = document.getElementById("product").value;
    const obj = { productName };

    axios.post("http://localhost:3000/api/products", obj, {
        headers: { "Content-Type": "application/json" }
    })
    .then(response => {
        console.log("Server Response:", response.data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
