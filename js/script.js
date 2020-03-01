let order = document.getElementById("order");

order.addEventListener("click", function(e) {
  e.preventDefault();
  let pizza = document.getElementById("pizza");
  let pizzaOpt = pizza.options[pizza.selectedIndex];
  alert(pizzaOpt.text);
});
