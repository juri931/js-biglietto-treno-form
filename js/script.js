document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const userName = document.getElementById('inputName');
  const distanceKm = document.getElementById('inputKm');
  const ageSelect = document.getElementById('formSelect');

  console.log(`Name: ${userName.value}`);
  console.log(`Distance: ${distanceKm.value} KM`);
  console.log(`Age: ${ageSelect.value}`);

  document.getElementById('userName').textContent = userName.value;
  document.getElementById('distance').textContent = distanceKm.value;
  document.getElementById('age').textContent = ageSelect.value;

  const basePricePerKm = 0.21;
  const totalDistance = parseFloat(distanceKm.value);
  let total = totalDistance * basePricePerKm;

  document.getElementById('total').textContent = `The cost of the ride will be: €${total.toFixed(2)}`;

  let discount = 0;

  if (ageSelect.value < 18) {
    discount = total * 0.20;
    document.getElementById('discount').textContent = `Your 20% discount is: €${discount.toFixed(2)}`;
  } else if (ageSelect.value > 65) {
    discount = total * 0.40;
    document.getElementById('discount').textContent = `Your 40% discount is: €${discount.toFixed(2)}`;
  } else {
    document.getElementById('discount').textContent = "You are not eligible for any discount";
  }

  total -= discount;

  document.getElementById('totalFinal').textContent = `The total cost of the ticket is: €${total.toFixed(2)}`;
});