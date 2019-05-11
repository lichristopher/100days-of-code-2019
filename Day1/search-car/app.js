const brands = [
  "Acura",
  "Alfa-Romeo",
  "Aston-Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Bugatti",
  "Buick",
  "Byton",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Cupra",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "Genesis",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Koenigsegg",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Lotus",
  "Maserati",
  "Mazda",
  "Mclaren",
  "Mercedes",
  "Mini",
  "Mitsubishi",
  "Nio",
  "Nissan",
  "Opel",
  "Pagani",
  "Peugeot",
  "Porsche",
  "Ram",
  "Renault",
  "Rivian",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo"
];

const searchField = document.querySelector("#search-car");
const ul = document.querySelector("ul");

searchField.addEventListener("input", function(e) {
  const filteredList = filterList(brands);
  displayList(filteredList);
});

function filterList(list) {
  return list.filter(item => {
    item = item.toLowerCase();
    return item.includes(searchField.value);
  });
}

function displayList(list) {
  ul.innerHTML = "";
  list.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

// Full List
displayList(brands);
