// Object property shorthand
const name = "Christopher";
const userAge = 21;
const user = {
  name: name,
  userAge: userAge,
  location: "Philippines"
};

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: null
};

const { label, price, stock } = product;

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
