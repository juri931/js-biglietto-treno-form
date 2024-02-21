document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const userName = document.getElementById('inputName');
  const distanceKm = document.getElementById('inputKm');
  const ageSelect = document.getElementById('formSelect');

  console.log(`Nome: ${userName.value}`);
  console.log(`Distanza: ${distanceKm.value} KM`);
  console.log(`Età: ${ageSelect.value}`);

  userName.textContent = userName.value;
  distanceKm.textContent = distanceKm.value;
  ageSelect.textContent = ageSelect.value;

  const basePricePerKm = 0.21;
  const totalDistance = parseFloat(distanceKm.value);
  let total = totalDistance * basePricePerKm;

  document.getElementById('total').textContent = `Costo della tratta: €${total.toFixed(2)}`;

  let discount = 0;


  if (ageSelect.value = minor) {
    discount = total * 0.20;
    document.getElementById('discount').textContent = `Il tuo sconto del 20% è di: €${discount.toFixed(2)}`;
  } else if (ageSelect.value = major) {
    discount = total * 0.40;
    document.getElementById('discount').textContent = `Il tuo sconto del 40% è di: €${discount.toFixed(2)}`;
  } else {
    document.getElementById('discount').textContent = "Non hai diritto a nessuno sconto";
  }

  total -= discount;

  document.getElementById('totalFinal').textContent = `Il prezzo totale è di: €${total.toFixed(2)}`;
});