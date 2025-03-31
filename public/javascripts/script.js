function addProduct(event) {
    event.preventDefault();
    let name = document.getElementById("productname").value;
    let category = document.getElementById("category").value;
    let subcategory = document.getElementById("subcategory").value;
    let description = document.getElementById("productdes").value;
    let price = document.getElementById("price").value;

    let productList = document.getElementById("productList");
    let productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.innerHTML = `<strong>${name}</strong><br>Category: ${category}<br>Subcategory: ${subcategory}<br>Description: ${description}<br>Price: $${price}`;
    
    productList.appendChild(productItem);
  }