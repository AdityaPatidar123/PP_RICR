const URL = "./makeup.json";

async function fetchitems() {
  const response = await fetch(URL);
  const data = await response.json();
  const product = data.product;
 // console.log(response);
 // console.log(data);
 const container = document.getElementById("con");

  product.array.forEach(element => {
    console.log(element);
    const items=document.createElement("div");
    product.innerhtml=`<div class="box w-25 justify-content-center border rounded shadow">
            <div class="image d-grid justify-content-center p-3">
              <img src="${element.Image_link}" alt="" />
            </div>
            <div class="name d-grid justify-content-center p-3">
              <label for="name">${element.name}</label>
              
            </div>
            <div class="price d-grid justify-content-center p-3">
              <label for="price">${element.price}</label>
            </div>
          </div>`


  });

container.appendChild("items")
  
}

fetchitems()
