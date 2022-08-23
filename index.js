const loadListOne = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 563492ad6f91700001000001e9be0c255fe14ba78169068485a530ed",
    },
  };

  fetch("https://api.pexels.com/v1/search?query=[Tigers]", options)
    .then((response) => response.json())
    .then((test1) => {
      console.log(test1);

      const grid = document.querySelector(".testContainerOne > .testRowOne");

      for (let i = 0; i < test1.photos.length; i++) {
        const images = test1.photos[i];

        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-3";

        col.innerHTML = ` <div class="card">
                      <img src=${images.src.tiny} class="card-img-top" alt=${images.id}>
                          <div class="card-body">
                              <h5 class="card-title">${images.photographer}</h5>
                          </div>
                  </div>`;

        grid.appendChild(col);
      }
    })
    .catch((err) => console.error(err));
};

const btnOne = document.getElementById("buttonOne");
btnOne.addEventListener("click", loadListOne);

const loadListTwo = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 563492ad6f91700001000001e9be0c255fe14ba78169068485a530ed",
    },
  };

  fetch("https://api.pexels.com/v1/search?query=[Fish]", options)
    .then((response) => response.json())
    .then((test2) => {
      console.log(test2);

      const grid = document.querySelector(".testContainerTwo > .testRowTwo");

      for (let i = 0; i < test2.photos.length; i++) {
        const images = test2.photos[i];

        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-3";

        col.innerHTML = ` <div class="card">
                      <img src=${images.src.tiny} class="card-img-top" alt=${images.id}>
                          <div class="card-body">
                              <h5 class="card-title">${images.photographer}</h5>
                          </div>
                  </div>`;

        grid.appendChild(col);
      }
    })
    .catch((err) => console.error(err));
};

const btnTwo = document.getElementById("buttonTwo");
btnTwo.addEventListener("click", loadListTwo);
