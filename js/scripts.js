
// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function () {

  const basePrice = 10;
  const toppings = [0];
  let output = [basePrice + (toppings * 2)];
  if (this.size === "Medium") {
    output[0] -= 2;
  }
  if (this.size === "Large") {
    output[0] += 2;
  }
  return ("$" + output);
};

// UI Logic

$(document).ready(function () {

  $("form#options").submit(function (event) {
    event.preventDefault();

    let inputtedToppings = [];

    $("#cart").show();
    $("input:checkbox[name=pizza-topping]:checked").each(function () {
      const toppingsInput = $(this).val();
      inputtedToppings.push(" " + toppingsInput.toLowerCase().toString());

    })
    const inputtedSize = $('input:radio[name=size]:checked').val();

    let myPizza = new Pizza(inputtedToppings, inputtedSize);

    let result = ("One" + " " + myPizza.size.toLowerCase() + " " + "pizza" + " " + "with" + " " + inputtedToppings + ". " + "<br><br>" + "Your total today is" + " " + myPizza.cost()) + ". Thank you for your business!";

    $("#cart").append(result);
    console.log(result);

    $('#options').hide();
  });
})













