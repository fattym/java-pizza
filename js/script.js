let order = document.getElementById("order");

order.addEventListener("click", function(e) {
  e.preventDefault();
  //   Select Pizza
  let pizza = document.getElementById("pizza");
  let pizzaOpt = pizza.options[pizza.selectedIndex];
  // Select Size
  let size = document.getElementById("size");
  let sizeOpt = size.options[size.selectedIndex];
  // Select Crust
  let crust = document.getElementById("crust");
  let crustOpt = crust.options[crust.selectedIndex];
  // Select Toppings
  let toppings = document.getElementById("toppings");
  let toppingsOpt = toppings.options[toppings.selectedIndex];
  // Quantity
  let quantity = document.getElementById("quantity");
  //   Total
  let total = (parseInt(sizeOpt.value) * parseInt(quantity.value)) + parseInt(crustOpt.value) + parseInt(toppingsOpt.value);

  $(document).ready(function(){
      $("tbody").append("<tr><td>"+quantity.value+"</td>" + "<td>"+pizzaOpt.text+"</td>"+"<td>"+sizeOpt.text+"</td>"+"<td>"+crustOpt.text+"</td>" + "<td>"+toppingsOpt.text+"</td>"+ "<td>"+total+"</td></tr>");
      
  })

//   alert(total);
});
