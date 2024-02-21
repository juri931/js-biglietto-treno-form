document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const userName = document.getElementById('inputName');
  const distanceKm = document.getElementById('inputKm');
  const ageSelect = document.getElementById('ageSelect');

  console.log(`Nome: ${userName.value}`);
  console.log(`Distanza: ${distanceKm.value} KM`);
  console.log(`Età: ${ageSelect.value}`);

  userName.textContent = userName.value;
  distanceKm.textContent = distanceKm.value;
  ageSelect.textContent = ageSelect.value;

  const basePricePerKm = 0.21;
  const totalDistance = distanceKm.value;
  let total = totalDistance * basePricePerKm;

  document.getElementById('total').textContent = `Costo della tratta: €${total.toFixed(2)}`;

  let discount20 = total * 0.20;
  let discount40 = total * 0.40;

  if (ageSelect.value = "1") {
    total = (total - discount20);
    document.getElementById('discount').textContent = "Il tuo sconto del 20% è di: €" + ((discount20).toFixed(2));
  } else if (ageSelect.value = "3") {
    total = (total - discount40);
    document.getElementById('discount40').textContent = "Il tuo sconto del 40% è di: €" + ((discount40).toFixed(2));
  } else {
    document.getElementById('discount').textContent = "Non hai diritto a nessuno sconto";
  }

  document.getElementById('totalFinal').textContent = "Il prezzo totale è di: €" + ((total).toFixed(2));
});