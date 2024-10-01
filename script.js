const registrationFees = {
  bachelor: { 'in-state': 200, 'out-state': 600 },
  master: { 'in-state': 300, 'out-state': 900 }
};
const tuitionRates = {
  bachelor: { 'in-state': 350, 'out-state': 700 },
  master: { 'in-state': 450, 'out-state': 900 }
};

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const studentType = document.getElementById('studentType').value;
  const residency = document.getElementById('residency').value;
  const creditsTaking = parseInt(document.getElementById('creditsTaking').value);

  if (!studentType || !residency || isNaN(creditsTaking) || creditsTaking <= 0) {
      alert("Please fill out all fields correctly.");
      return;
  }

  let registrationFee = registrationFees[studentType][residency];
  let tuitionRate = tuitionRates[studentType][residency];
  let tuition = creditsTaking * tuitionRate;
  let total = tuition + registrationFee;

  document.getElementById('result').style.display = 'block';
  document.getElementById('result').innerHTML = `
      <p>Student Type: ${studentType.charAt(0).toUpperCase() + studentType.slice(1)}</p>
      <p>Residency: ${residency.charAt(0).toUpperCase() + residency.slice(1)}</p>
      <p>Credits Taking: ${creditsTaking}</p>
      <p>Registration Fee: $${registrationFee}</p>
      <p>Tuition Rate: $${tuitionRate} (per credit)</p>
      <p>Tuition: $${tuition}</p>
      <p>Total: $${total}</p>
  `;
});
