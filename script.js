const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const peopleInput = document.getElementById('people');
const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');

function calculateTip() {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);
  const people = parseInt(peopleInput.value);

  if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people <= 0) {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    return;
  }

  const tip = (bill * tipPercent) / 100;
  const total = bill + tip;
  const tipPerPerson = tip / people;
  const totalPerPerson = total / people;

  tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
}

[billInput, tipInput, peopleInput].forEach(input => {
  input.addEventListener('input', calculateTip);
});
