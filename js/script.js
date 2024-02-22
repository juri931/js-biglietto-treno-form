
const btnGenera = document.getElementById('genera');
const btnReset = document.getElementById('reset');


btnGenera.addEventListener('click', function(){
  const nome = document.getElementById('name').value;
  const km = parseInt(document.getElementById('km').value);
  const eta = document.getElementById('fascia-eta').value;
  
  const basePrice = 0.21;
  let total = basePrice * km;
  let discount = 0;
  let discount20 = total * 0.20;
  let discount40 = total * 0.40;
  let prezzoFinale = 0;

  if(eta === 'minorenne'){
    discount = discount20;
    prezzoFinale = total - discount20;
    document.getElementById('prezzo').innerHTML = `Il prezzo del biglietto è di: €${total.toFixed(2)}`;
    document.getElementById('discount').innerHTML = `lo sconto del 20% è di: €${discount20.toFixed(2)}`;
    document.getElementById('prezzoFinale').innerHTML = `Il totale del biglietto è di: €${prezzoFinale.toFixed(2)}`;
  }else if(eta === 'over65'){
    discount = discount40;
    prezzoFinale = total - discount40;
    document.getElementById('prezzo').innerHTML = `Il prezzo del biglietto è di: €${total.toFixed(2)}`;
    document.getElementById('discount').innerHTML = `lo sconto del 40% è di: €${discount40.toFixed(2)}`;
    document.getElementById('prezzoFinale').innerHTML = `Il totale del biglietto è di: €${prezzoFinale.toFixed(2)}`;
  }else{
    prezzoFinale = total;
    document.getElementById('discount').innerHTML = `Non hai diritto a nessuno sconto`;
    document.getElementById('prezzoFinale').innerHTML = `Il totale del biglietto è di: €${prezzoFinale.toFixed(2)}`;
  }

  console.log(nome, km + ('km'), eta, total.toFixed(2), discount.toFixed(2), prezzoFinale.toFixed(2));
})

btnReset.addEventListener('click', function(){
  document.getElementById('name').value = '';
  document.getElementById('km').value = 0;
  document.getElementById("fascia-eta").value = "scegli";
})
