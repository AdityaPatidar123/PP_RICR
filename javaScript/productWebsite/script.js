const URL = "./makeup.json";

async function fetchitems() {
  const response = await fetch(URL);
  const data = await response.json();
  //const makeups = data.makeup;
  console.log(data.makeup);

  // console.log(response);
  // console.log(data);
  const container = document.getElementById("con");

  data.forEach((element) => {
    const items = document.createElement("div");
    console.log(element);

    items.innerHTML = `<div class="box w-25  justify-content-center border rounded shadow m-3">
            <div class="image d-grid justify-content-center p-3">
              <img src="${element.image_link}" alt="${element.name}" height="100" width="100" />
            </div>
            <div class="name d-grid justify-content-center ">
              <label for="brand">${element.brand}</label>
              
            </div>
            <div class="name d-grid justify-content-center p-2 ">
              <label for="name">${element.name}</label>
              
            </div>
            <div class="price d-grid justify-content-center p-3">
              <label for="price">${element.price}</label>
            </div>
          </div>`;

    container.appendChild(items);
  });
}

fetchitems();
